/**
 * Person.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
    },

    genre: {
      type: 'string',
      required: true
    },

    address: {
      type: 'string',
      required: true
    },

    area: {
      type: 'string',
      required: true
    },

    postal: {
      type: 'string',
      required: true
    },

    telephone: {
      type: 'string',
      required: true
    },

    cellphone: {
      type: 'string',
      required: true
    },

    NIF: {
      type: 'string',
      required: true,
      unique: true
    },

    identificationNumber: {
      type: 'string',
      required: true,
      unique: true
    },

    birthday: {
      type: 'string',
      columnType: 'date',
      required: false,
      allowNull: true
    },

    profession: {
      type: 'string',
      required: true,
    },

    employer: {
      type: 'string',
      required: true,
    },

    email: {
      type: 'string',
      required: true,
      unique: true
    },

    subscription: {
      model: 'fund',
      via: 'participant',
      required: false,
      unique: true
    },

    contributor: {
      model: 'contributor',
      required: true,
      unique: true
    },

    investorProfile: {
      model: 'profile'
    }
  },

  parseAttrs(attrs) {
    var parsed = {
      name: attrs.NAME,
      genre: attrs.GENDER,
      address: attrs.ADDRESS,
      area: attrs.AREA,
      postal: attrs.POSTAL,
      telephone: attrs.TELEPHONE,
      cellphone: attrs.CELLPHONE,
      NIF: attrs.NIF,
      identificationNumber: attrs.ID,
      birthday: attrs.BIRTHDAY,
      profession: attrs.JOB,
      employer: attrs.EMPLOYER,
      email: attrs.EMAIL
    };

    return parsed;
  },

};
