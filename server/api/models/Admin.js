/**
 * Admin.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 32;
const USERNAME_MAX_LENGTH = 32;

module.exports = {

  attributes: {
    username: {
      type: 'string',
      maxLength: USERNAME_MAX_LENGTH,
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      minLength: PASSWORD_MIN_LENGTH,
      maxLength: PASSWORD_MAX_LENGTH,
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
  },

  customToJson: () => {
    return _.omit(this, ['password']);
  },

  beforeCreate (attrs, next) {
    bcrypt.hash(attrs.password, SALT_ROUNDS)
      .then(function(hash) {
        attrs.password = hash;
        next();
      });
  },

  beforeUpdate (attrs, next) {
    if(attrs.password){
      bcrypt.hash(attrs.password, SALT_ROUNDS)
        .then(function(hash) {
          attrs.password = hash;
          next();
        });
    } else {
      return next();
    }
  },
};
