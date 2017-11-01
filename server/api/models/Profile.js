/**
 * Profile.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    age: {
      type: 'number',
      required: true,
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

};
