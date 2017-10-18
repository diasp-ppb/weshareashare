/**
 * Token.js
 *
 * @description :: Security token
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const randToken = require('rand-token');
const moment = require('moment');

module.exports = {
  updatedAt: false,
  attributes: {
    value: 'string',
    type: {
      type: 'string',
      isIn: ['access', 'refresh', 'reset'],
    },
    expiresAt: { type: 'string', columnType: 'date' },
    user: {
      model: 'user',
    },
  },

  findOrAdd(attrs, next) {
    const tokenConfig = sails.config.security.tokens[attrs.type];
    const token = Object.assign({}, attrs, {
      value: randToken.generate(tokenConfig.length),
      expiresAt: moment().utc().add(tokenConfig.life, 'seconds').toDate(),
    });

    // Destroy user tokens about to expire
    return this.destroy(Object.assign({}, attrs, {
      expiresAt: {
        '<=': moment().utc().add(5, 'minutes').toDate(),
      },
    }), (destroyErr) => {
      if (destroyErr) {
        return next(destroyErr);
      }
      // Restore existing token or create a new one
      this.findOrCreate(attrs, token).exec((createErr, userToken) => {
        if (createErr) {
          return next(createErr);
        }
        return next(null, userToken);
      });
    });
  },
};
