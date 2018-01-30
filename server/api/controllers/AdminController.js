/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const passport = require('passport');
 const moment = require('moment');

 const expiresIn = expiresAt =>
   Math.round(moment.duration(
     moment(expiresAt).diff(moment())
   ).asSeconds());

/**
 * Sends the user tokens properly formatted
 * @param accessToken
 * @param refreshToken
 * @param admin
 * @returns {{tokens: {access: {type: string, value, expiresIn: *}, refresh: {type: string, value}}, admin: {id: *, username: *, email: *}}}
 */
 const formatTokenResponse = (accessToken, refreshToken, admin) => ({
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
   admin: {
     id: admin.id,
     username: admin.username,
     email: admin.email,
   },
 });

 module.exports = {

   /**
    * Creates a new user with admin privileges
    * @param req
    * @param res
    */
   create(req, res) {
     let params = req.allParams();
     params['isAdmin'] = true;
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

   /**
    * Authenticates an admin using passport and the basic policy
    * @param req
    * @param res
    */
   signin(req, res) {
     passport.authenticate(['basic'], { session: false }, (authErr, user) => {
       if (authErr || !user) {
         return res.unauthorized({'response': 'The email address or password you entered is not valid.'});
       }

       User.findOne({
         email: user.email,
       }).then((user) => {
         if (user.isAdmin === false)
           return res.unauthorized({'response': 'You are not an admin.'});

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
       });


     })(req, res);
   },
 };
