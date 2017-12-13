/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const moment = require('moment');

const expiresIn = expiresAt =>
  Math.round(moment.duration(
    moment(expiresAt).diff(moment())
  ).asSeconds());

const formatTokenResponse = (accessToken, refreshToken, user) => ({
  tokens: {
    access: {
      type: 'access',
      value: accessToken.value,
      expiresIn: expiresIn(accessToken.expiresAt),
    },

    refresh: {
      type: 'refresh',
      value: refreshToken.value,
    }
  },
  user: {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  },
});

module.exports = {
  create(req, res) {
    let params = req.allParams();
    sails.log(params);
    User.create({email: params.email, firstName: params.firstName, lastName: params.lastName, password: params.password}).meta({fetch: true})
      .then((user) => {
        return user;
      }).then((user) => {
        let email = sails.config.custom.email;
        email.send({
          template: 'register',
          message: {
            to: user.email
          },
          locals: {
            name: user.username,
            email: user.email,
          }
        });
        return user;
      }).then((user) => {
        Token.findOrAdd({
          user: user.id,
          type: 'access',
        }).then((accessToken) => {
          Token.findOrAdd({
            user: user.id,
            type: 'refresh',
          }).then((refreshToken) => {
            return res.ok(formatTokenResponse(accessToken, refreshToken, user));
          }).catch((err) => {
            return res.serverError(err);
          });
        });
      }).catch((err) => {
        sails.helpers.customValidation({model: User, err: err})
          .then((customErrors) => {
            return res.serverError(customErrors);
          }).catch((error) => {
            return res.serverError(error);
          });
      });
  },

  getAll(req, res) {
    User.find()
      .then((users) => {
        for (var i = 0; i < users.length; i++)
          delete users[i].password;
        res.ok({ users });
      }).catch((err) => {
        return res.serverError(err);
      });
  },

  getPendingUsers(req, res) {
    User.find()
      .then((users) => {
        let pendingUsers = [];

        for (var i = 0; i < users.length; i++) {
          if (users[i].isAdmin || !users[i].awaitsConfirmation)
            continue;
          delete users[i].password;
          pendingUsers.push(users[i]);
        }
        sails.log(pendingUsers);
        res.ok({'users': pendingUsers});
      }).catch((err) => {
        return res.serverError(err);
      });
  },

  getSubscriptedUsers(req, res) {
    User.find()
      .then((users) => {
        let subscriptedUsers = [];

        for (var i = 0; i < users.length; i++) {
          if (users[i].isAdmin || users[i].awaitsConfirmation)
            continue;
          delete users[i].password;
          subscriptedUsers.push(users[i]);
        }

        res.ok({ 'users': subscriptedUsers });
      }).catch((err) => {
        return res.serverError(err);
      });
  },

  getUser(req, res) {
    let params = req.allParams();

    User.findOne({id: params.userid})
    .then((user) => {
      delete user.password;
      res.ok({user});
    })
    .catch((err) => {
      return res.serverError(err);
    });
  },

  validateUser(req, res) {
    let params = req.allParams();
    sails.log(params);
    User.update({id:params.userid},{awaitsConfirmation:false}).exec(
      function afterwards(err, updated) {
        if (err) {
          return res.serverError(err);
        }
        else {
          sails.log(updated);
          res.ok({'message': 'Utilizador validado.'});
        }
    });
  },
};
