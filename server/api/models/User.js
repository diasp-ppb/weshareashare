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
const STRING_MAX_LENGTH = 64;

module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      maxLength: STRING_MAX_LENGTH,
      required: true,
    },
    lastName: {
      type: 'string',
      maxLength: STRING_MAX_LENGTH,
      required: true,
    },
    password: {
      type: 'string',
      minLength: PASSWORD_MIN_LENGTH,
      maxLength: PASSWORD_MAX_LENGTH,
      required: true,
    },
    email: {
      type: 'string',
      maxLength: STRING_MAX_LENGTH,
      isEmail: true,
      required: true,
      unique: true,
    },
  
    cause: {
      model: 'cause',
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
};

