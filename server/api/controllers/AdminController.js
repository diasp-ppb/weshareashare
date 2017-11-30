/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const moment = require('moment');

 const expiresIn = expiresAt =>
   Math.round(moment.duration(
     moment(expiresAt).diff(moment())
   ).asSeconds());

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

  create(req, res) {
    let params = req.allParams();
    Admin.create(params).meta({fetch: true})
      .then((admin) => {
        return admin;
      }).then((admin) => { // TODO: send registration email to admin
        Token.findOrAdd({
          admin: admin.id,
          type: 'access',
        }).then((accessToken) => {
          Token.findOrAdd({
            admin: admin.id,
            type: 'refresh',
          }).then((refreshToken) => {
            return res.ok(formatTokenResponse(accessToken, refreshToken, admin));
          }).catch((err) => {
            return res.serverError(err);
          });
        });
      }).catch((err) => {
        sails.helpers.customValidation({model: Admin, err: err})
          .then((customErrors) => {
            return res.serverError(customErrors);
          }).catch((error) => {
            return res.serverError(error);
          });
      });
  },

};
