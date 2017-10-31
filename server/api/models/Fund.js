/**
 * Fund.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {

    participant: {
      model: 'person',
      via: 'subscription'
    },

    contributor: {
      model: 'person',
      via: 'contributions'
    },

    beneficiaries: {
      collection: 'beneficiary',
      via: 'provider'
    },

    assets: {
      collection: 'asset',
      via: 'entity'
    }
  },

};
