/**
 * User.js
 *
 * @description :: Represents an instance of an user
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
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
      maxLength: 72,
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },

    person: {
      model: 'Person',
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

  validationMessages: {
    username: {
      required: 'Username is required.',
      unique: 'Username already exists.',
      maxLength: `Username is too long (max ${PASSWORD_MAX_LENGTH} characters).`,
    },
    email: {
      required: 'Email address is required.',
      email: 'Email address is not valid.',
      unique: 'Email address already exists.',
    },
    password: {
      required: 'Password is required.',
      minLength: `Password is too short (min ${PASSWORD_MIN_LENGTH} characters).`,
      maxLength: `Password is too long (max ${PASSWORD_MAX_LENGTH} characters).`,
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

  parseAttrs(attrs) {
    return {
      username: String(attrs.username).trim(),
      email: String(attrs.email).trim(),
      password: String(attrs.password).trim(),
    };
  },
};
