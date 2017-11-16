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

    periodicity: {
      type: 'number',
      required: true
    },

    initialDate: {
      type: 'string',
      columnType: 'date',
      required: true
    },

    facta: {
      type: 'boolean',
      required: false
    }
  },

  parseAttrs(attrs) {
    var parsed = {
      participant: Person.parseAttrs(attrs.participant),
      contributor: Contributor.parseAttrs(attrs.contributor),
      checkNo: attrs.subscription.CHECKNO,
      checkBank: attrs.subscription.CHECKBANK,
      subscriptionValue: parseInt(attrs.subscription.VALUE),
      paymentMethod: parseInt(attrs.subscription.METHOD),
      accountNo: attrs.subscription.IBAN,
      debitAmount: parseInt(attrs.subscription.DEBIT),
      debitGrowth: parseInt(attrs.subscription.GROWTH),
      periodicity: parseInt(attrs.subscription.PERIODICITY),
      initialDate: attrs.subscription.INITIALDATE
    };

    return parsed;
  },

};
