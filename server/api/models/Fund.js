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
      checkNo: (attrs.CHECKNO == null)? '' : attrs.CHECKNO,
      checkBank: (attrs.CHECKBANK == null)? '' : attrs.CHECKBANK,
      subscriptionValue: (attrs.VALUE == null)? 0 : parseInt(attrs.VALUE),
      paymentMethod: (attrs.METHOD == null)? 0 : parseInt(attrs.METHOD),
      accountNo: (attrs.IBAN == null)? '' : attrs.IBAN,
      debitAmount: (attrs.DEBIT == null)? 0 : parseInt(attrs.DEBIT),
      debitGrowth: (attrs.GROWTH == null)? 0 : parseInt(attrs.GROWTH),
      periodicity: (attrs.PERIODICITY == null)? 0 : parseInt(attrs.PERIODICITY),
      initialDate: (attrs.INITIALDATE == null)? '' : attrs.INITIALDATE
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
