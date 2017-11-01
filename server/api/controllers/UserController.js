/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create(req, res) {
    let params = req.allParams();
    User.create(params).meta({fetch: true})
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
        }).then(() => {
          return res.created(user);
        }).catch((err) => {
          return res.serverError(err);
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
        res.ok({ users });
      }).catch((err) => {
        return res.serverError(err);
      });
  },
};

