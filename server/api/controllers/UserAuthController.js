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
    username: user.username,
    email: user.email,
  },
});

module.exports = {
  signin(req, res) {
    passport.authenticate(['basic'], { session: false }, (authErr, user) => {
      if (authErr || !user) {
        return res.unauthorized({'response': 'The email address or password you entered is not valid.'});
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
      return res.badRequest({response: 'Invalid parameters'});
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

  async resetRequest(req, res) {
    const params = req.allParams();
    console.log(params);
    if(!params.email) {
      return res.badRequest({response: 'Invalid parameters'});
    }

    let user, token;
    try {
      user = await User.findOne({email: params.email});
    } catch(err) {
      res.serverError(err);
    }

    if (!user) {
      return res.badRequest({response: 'This email doesn\'t exist in our platform.'});
    }

    try {
      token = await Token.findOrAdd({user: user.id, type: 'reset'});
    } catch (err) {
      res.serverError(err);
    }

    let email = sails.config.custom.email;
    email.send({
      template: 'passwordReset',
      message: {
        to: user.email
      },
      locals: {
        name: user.username,
        token: token.value,
      }
    }).then(() => {
      return res.ok({response: 'An email with a token to reset the password was sent to this account.'});
    }).catch((err) => {
      return res.serverError(err);
    });
  },

  async resetPassword(req, res) {
    const params = req.allParams();
    if (!params.password || !params.email) {
      return res.badRequest({response: 'Invalid parameters'});
    }

    let token, user;
    try {
      token = await Token.find({value: params.token.value});
    } catch (err) {
      res.serverError(err);
    }

    try {
      user = await User.update(
        {email: params.email},
        {password: params.password}
      ).meta({fetch: true});
    } catch (err) {
      res.serverError(err);
    }

    if(user.length !== 0) {
      Token.destroy({value: token.value})
        .then(() => {
          res.ok({response: 'Password updated with success!'});
        }).catch((err) => {
          res.serverError(err);
        });
    } else {
      return res.badRequest({response: 'The selected email and reset token are not valid!'});
    }
  },
};
