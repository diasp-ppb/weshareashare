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
    expiresAt: { type: 'ref', columnType: 'date' },
    user: {
      model: 'user',
    },
  },

  async findOrAdd(attrs) {
    const tokenConfig = sails.config.security.tokens[attrs.type];
    const token = Object.assign({}, attrs, {
      value: randToken.generate(tokenConfig.length),
      expiresAt: moment().utc().add(tokenConfig.life, 'seconds').toDate(),
    });

    // Destroy user tokens about to expire
    try {
      await Token.destroy(Object.assign({}, attrs, {
        expiresAt: {
          '<=': moment().utc().add(5, 'minutes').toDate(),
        },
      }));

      return await Token.findOrCreate(attrs, token);
    } catch (err) {
      return err;
    }
  }
};
