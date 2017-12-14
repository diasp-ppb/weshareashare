/**
 * Profile.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    person: {
      model: 'person',
      required: true,
      unique: true
    },

    duration: {
      type: 'number',
      required: true
    },

    percentage: {
      type: 'number',
      required: true
    },

    goal: {
      type: 'number',
      required: true,
    },

    feeling: {
      type: 'number',
      required: true
    },

    risk: {
      type: 'number',
      required: true
    },

    type: {
      type: 'number',
      required: true
    },

    profitability: {
      type: 'number',
      required: true
    },

    score: {
      type: 'number'
    },
  },

  parseAttrs(attrs) {
    return {
      duration: parseInt(attrs.investorProfile.DURATION),
      percentage: parseInt(attrs.investorProfile.PERCENTAGE),
      goal: parseInt(attrs.investorProfile.GOAL),
      feeling: parseInt(attrs.investorProfile.FEELING),
      risk: parseInt(attrs.investorProfile.RISK),
      type: parseInt(attrs.investorProfile.TYPE),
      profitability: parseInt(attrs.investorProfile.PROFITABILITY),
      score: parseInt(attrs.investorProfile.SCORE),
    };
  },

  afterCreate(newRecord, cb) {
    Person.update(newRecord.person, {investorProfile: newRecord.id}).then(function() {
      return newRecord.id;
    });
  },

};
