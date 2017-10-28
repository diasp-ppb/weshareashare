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
    expiresAt: { type: 'number', columnType: 'date' },
    user: {
      model: 'user',
    },
  },

  findOrAdd(attrs) {
    const tokenConfig = sails.config.security.tokens[attrs.type];
    const token = Object.assign({}, attrs, {
      value: randToken.generate(tokenConfig.length),
      expiresAt: moment().utc().add(tokenConfig.life, 'seconds').toDate(),
    });

    // Destroy user tokens about to expire
    this.destroy(Object.assign({}, attrs, {
      expiresAt: {
        '<=': moment().utc().add(5, 'minutes').toDate(),
      },
    })).then(() => {

      this.findOrCreate(attrs, token)
        .then((userToken) => {
          return userToken;
        }).catch((err) => {
          return err;
        });

    }).catch((err) => {
      return err;
    });
  }
};
