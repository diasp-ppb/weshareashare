/**
 * UsersAuthController
 */

const passport = require('passport');
const moment = require('moment');

const expiresIn = expiresAt =>
  Math.round(moment.duration(
    moment(expiresAt).diff(moment())
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
};
