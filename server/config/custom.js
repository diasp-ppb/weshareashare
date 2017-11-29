/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
*/

const Email = require('email-templates');
const path = require('path');

module.exports.custom = {
  safeEmailEnvironment: true,
  email: new Email({
    message: {
      from: 'WeShareAShare  <noreply@stoik.com>',
    },
    views: {
      root: path.resolve('views/emails'),
    },
    send: this.safeEmailEnvironment,
    transport: {
      host: 'mailhog',
      port: 1025,
      secure: false,
      tls: {
        rejectUnauthorized: false
      },
    },
  }),
};
