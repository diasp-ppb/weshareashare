/**
 * UsersAuthController
 */

const passport = require('passport');
const moment = require('moment');

const expiresIn = expiresAt =>
  Math.round(moment.duration(
    moment(moment()).diff(expiresAt)
  ).asSeconds());

const formatTokenResponse = (accessToken, refreshToken, user) => ({
  tokens: [{
    type: 'access',
    value: accessToken.value,
    expiresIn: expiresIn(accessToken.expiresAt),
  }, {
    type: 'refresh',
    value: refreshToken.value,
  }],
  user: {
    id: user.id,
  },
});

module.exports = {
  signin(req, res) {
    passport.authenticate(['basic'], { session: false }, (authErr, user) => {
      if (authErr || !user) {
        return res.unauthorized();
      }

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

      }).catch((err) => {
        return res.serverError(err);
      });

    })(req, res);
  },

  signout(req, res) {

  },

  refresh(req, res) {
    const params = req.allParams();

    // Verify the refresh token is assigned to the user
    Token.findOne({
      user: params.user.id,
      value: params.token.value,
      type: 'refresh',
    }).then(() => {

      Token.destroy({
        user: params.user.id,
        type: 'access',
      }).then(() => {

        // Create a new access token
        Token.findOrAdd({
          user: params.user,
          type: 'access',
        }).then((token) => {
          return res.ok(formatTokenResponse(token, params.token, params.user));
        }).catch((err) => {
          return res.serverError(err);
        });

      }).catch(err => {
        return res.serverError(err);
      });
    }).catch((err) => {
      return res.serverError(err);
    });
  },

  revoke(req, res) {
    const params = req.allParams();
    if (!params.tokens || !params.tokens.length) {
      return res.badRequest();
    }
    let counter = 0;

    params.tokens.forEach((token) => {
      Token.destroy({
        value: token.value,
        type: token.type,
        user: req.query.accessUser.id,
      }, (err) => {
        counter += 1;
        if (err) {
          return res.error();
        } else if (counter === params.tokens.length) {
          return res.ok();
        }
      });
    });
  },

  resetRequest(req, res) {
    const params = req.allParams();
    if(!params.email) {
      return res.badRequest();
    }

    User.findOne({
      email: params.email
    }).then((user) => {
      if(!user) {
        return res.badRequest({response: 'The selected email doesn\'t exist in our platform.'});
      }

      return user;
    }).then((user) => {
      Token.findOrAdd({
        user: user.id,
        type: 'reset',
      }).then(() => {
        return user;
      }).catch((err) => {
        throw(err);
      });
    }).then((user) => {
      let email = sails.config.custom.email;
      email.send({
        template: 'passwordReset',
        message: {
          to: user.email
        },
        locals: {
          name: user.username,
        }
      }).then(() => {
        return res.ok({response: 'An email with a link to reset the password was sent to this account.'});
      }).catch((err) => {
        return res.serverError(err);
      });
    }).catch((err) => {
      res.serverError(err);
    });
  },

  resetPassword: function (req, res) {
    const params = req.allParams();
    const token = params.token;
    if (!params.newPassword) {
      return res.badRequest();
    }

    Token.find({
      value: token.value,
    }).then((token) => {
      User.update({
        id: token.user
      }, {password: params.newPassword}).meta({fetch: true})
        .then((user) => {
          console.log(user);
        }).catch((err) => {
          throw(err);
        });
    }).then(() => {
      Token.destroy({
        value: token.value,
      }).then(() => {
        res.ok({response: 'Password updated with success!'});
      });
    }).catch((err) => {
      res.serverError(err);
    });
  },
};
