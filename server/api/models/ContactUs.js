/**
 * ContactUs.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    firstName: {
      required: true,
      type: 'string',
      maxLength: 64,
    },
    lastName: {
      required: true,
      type: 'string',
      maxLength: 64,
    },
    email: {
      required: true,
      type: 'string',
      maxLength: 64,
      isEmail: true,
    },
    subject: {
      required: true,
      type: 'string',
      maxLength: 64,
    },
    message: {
      required: true,
      type: 'string',
    }
  },
};
