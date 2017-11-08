/**
 * Production environment settings
 * (sails.config.*)
 *
 * What you see below is a quick outline of the built-in settings you need
 * to configure your Sails app for production.  The configuration in this file
 * is only used in your production environment, i.e. when you lift your app using:
 *
 * ```
 * NODE_ENV=production node app
 * ```
 * For more best practices and tips, see:
 * https://sailsjs.com/docs/concepts/deployment
 */

const Email = require('email-templates');
const path = require('path');

module.exports = {
  datastores: {
    default: {
      adapter: 'sails-postgresql',
      url: 'postgresql://weshareashare:ws_admin@postgresql:5432/weshareashare',
    },
  },
  models: {
    migrate: 'safe',
  },
  blueprints: {
    shortcuts: false,
  },
  security: {
    csrf: true,
    cors: {
      allRoutes: true,
      allowOrigins: '*',
      allowCredentials: false,
    },
  },
  session: {
    cookie: {
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,  // 24 hours
    },
  },
  sockets: {},
  log: {
    level: 'debug'
  },
  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000, // One year
    // trustProxy: true,
  },
  port: 80,
  // ssl: {
  //   ca: require('fs').readFileSync(require('path').resolve(__dirname,'../ssl/my-gd-bundle.crt')),
  //   key: require('fs').readFileSync(require('path').resolve(__dirname,'../ssl/my-ssl.key')),
  //   cert: require('fs').readFileSync(require('path').resolve(__dirname,'../ssl/my-ssl.crt'))
  // },
  custom: {
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
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        tls: {
          rejectUnauthorized: false
        },
      },
    }),
  },
};
