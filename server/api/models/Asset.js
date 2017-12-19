/**
 * Asset.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type: {
      type: 'string',
      required: true,
    },
    percentage: {
      type: 'number',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },

    entity: {
      model: 'fund'
    }

  },

};
