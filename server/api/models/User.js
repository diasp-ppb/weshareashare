/**
 * User.js
 *
 * @description :: Represents an instance of an user
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 72;
const USERNAME_MAX_LENGTH = 32;
const USERNAME_MIN_LENGTH = 4;

module.exports = {
  attributes: {
    username: {
      type: 'string',
      minLength: USERNAME_MIN_LENGTH,
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
      maxLength: USERNAME_MAX_LENGTH,
      isEmail: true,
      required: true,
      unique: true,
    },

    notifications: {
      collection: 'notification',
      via: 'receiver'
    },

    documents: {
      collection: 'document',
      via: 'owner'
    }
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

  parseAttrs(attrs) {
    return {
      username: String(attrs.username).trim(),
      email: String(attrs.email).trim(),
      password: String(attrs.password).trim(),
    };
  },
};

