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
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  },
});

module.exports = {
  signin(req, res) {
    passport.authenticate(['basic'], { session: false }, (authErr, user) => {
      if (authErr || !user) {
        return res.unauthorized({'response': 'O email ou password introduzido não é válido.'});
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
    if(!params.Email) {
      return res.badRequest({response: 'Invalid parameters'});
    }

    let user, token;
    try {
      user = await User.findOne({email: params.Email});
    } catch(err) {
      res.serverError(err);
    }

    if (!user) {
      return res.badRequest({response: 'O email não existe na nossa plataforma.'});
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
        name: user.firstName + ' ' + user.lastName,
        token: token.value,
      }
    }).then(() => {
      return res.ok({response: 'Um email com o token para alterar a password foi enviado para o endereço introduzido.'});
    }).catch((err) => {
      return res.serverError(err);
    });
  },

  async resetPassword(req, res) {
    const params = req.allParams();
    if (!params.Password || !params.Email) {
      return res.badRequest({response: 'Invalid parameters'});
    }

    let token, user;
    try {
      token = await Token.find({value: params.Token});
    } catch (err) {
      res.serverError(err);
    }

    try {
      user = await User.update(
        {email: params.Email},
        {password: params.Password}
      ).meta({fetch: true});
    } catch (err) {
      res.serverError(err);
    }

    if(user.length !== 0) {
      Token.destroy({value: token.value})
        .then(() => {
          res.ok({response: 'Password alterada com sucesso.'});
        }).catch((err) => {
          res.serverError(err);
        });
    } else {
      return res.badRequest({response: 'O email e token introduzidos são inválidos.'});
    }
  },
};
