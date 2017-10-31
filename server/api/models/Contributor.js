/**
 * Contributor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

   funds: {
      collection: 'fund',
      via: 'contributor',
      required: false
    },

    person: {
      model: 'person',
      via: 'contributor',
      required: true,
      unique: true
    }

  },

};
