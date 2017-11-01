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
      collection: 'beneficiary'
    },

    subscriptionValue: {
      type: 'number',
      required: true
    },

    paymentMethod: {
      type: 'number',
      required: true
    },

    checkNo: {
      type: 'string',
      required: false
    },

    checkBank: {
      type: 'string',
      required: false
    },

    accountNo: {
      type: 'string',
      required: true
    },

    debitAmount: {
      type: 'number',
      required: true
    },

    debitGrowth: {
      type: 'number',
      required: true
    },

    debitGrowth: {
      type: 'number',
      required: true
    },

    periodicity: {
      type: 'number',
      required: true
    },

    initialDate: {
      type: 'string',
      columnType: 'date',
      required: true
    },

    fatca: {
      type: 'boolean',
      required: true
    }

  },

};
