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
      via: 'subscription',
      required: true,
      unique: true
    },

    contributor: {
      model: 'contributor',
      via: 'funds',
      required: false
    },
    
    beneficiaries: {
      collection: 'beneficiary',
      via: 'provider'
    },

    assets: {
      collection: 'asset',
      via: 'entity'
    },
  },

};
