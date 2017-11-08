/**
 * Cause.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true,
    },
    description: {
      type: 'string',
      required: true,
    },

    scope: {
      model: 'area'
    }

  },

};

