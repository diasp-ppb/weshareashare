/**
 * Beneficiary.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },

    NIF: {
      type: 'string',
      required: true,
    },

    relationship: {
      type: 'string',
      required: true,
    },

    percentage: {
      type: 'number',
      required: true,
    }
  },

};
