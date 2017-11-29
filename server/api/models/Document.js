/**
 * Document.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');
const randToken = require('rand-token');
const SALT_ROUNDS = 10;

module.exports = {
  attributes: {
    name: {
      required: true,
      type: 'string',
      maxLength: 64,
    },
    hash: {
      required: true,
      unique: true,
      type: 'string',
      maxLength: 64,
    },
    mimeType: {
      type: 'string',
      required: true,
      isIn: ['.xls', '.pdf', '.png' ,'.csv', '.doc', '.html', '.json', '.jpg', '.jpeg']
    },
    owner: {
      model: 'user'
    }
  },

  beforeCreate (attrs, next) {
    bcrypt.hash(randToken.generate(8), SALT_ROUNDS)
    .then(function(hash) {
      attrs.hash = hash;
      next();
    });
  },

};

