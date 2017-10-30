/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
*/

module.exports.custom = {
  safeEmailEnvironment: true,
  mailer: {
    from: 'WeShareAShare  <noreply@stoik.com>',
    port: 1025,
    host: 'mailhog',
    secure: true,
    tls: {
      rejectUnauthorized: false
    },
    templateDir: "views/emails"
  }
};
