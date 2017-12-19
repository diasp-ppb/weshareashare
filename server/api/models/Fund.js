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
      checkNo: (attrs.subscription.CHECKNO == null)? '' : attrs.subscription.CHECKNO,
      checkBank: (attrs.subscription.CHECKBANK == null)? '' : attrs.subscription.CHECKBANK,
      subscriptionValue: (attrs.subscription.VALUE == null)? 0 : parseInt(attrs.subscription.VALUE),
      paymentMethod: (attrs.subscription.METHOD == null)? 0 : parseInt(attrs.subscription.METHOD),
      accountNo: (attrs.subscription.IBAN == null)? '' : attrs.subscription.IBAN,
      debitAmount: (attrs.subscription.DEBIT == null)? 0 : parseInt(attrs.subscription.DEBIT),
      debitGrowth: (attrs.subscription.GROWTH == null)? 0 : parseInt(attrs.subscription.GROWTH),
      periodicity: (attrs.subscription.PERIODICITY == null)? 0 : parseInt(attrs.subscription.PERIODICITY),
      initialDate: (attrs.subscription.INITIALDATE == null)? '' : attrs.subscription.INITIALDATE
    };

    return parsed;
  },

  getDefaultData() {
    return {
      participant: 0,
      checkNo: '',
      checkBank: '',
      subscriptionValue: 0,
      paymentMethod: 0,
      accountNo: '',
      debitAmount: 0,
      debitGrowth: 0,
      periodicity: 0,
      initialDate: '',
      facta: false,
    };
  },

  afterCreate(newRecord, cb) {
    Person.update(newRecord.participant, {subscription: newRecord.id}).then(function() {
      return newRecord.id;
    });
  },

};
