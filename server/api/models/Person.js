/**
 * Person.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: {
      model: 'User',
      unique: true
    },

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

    subscription: {
      model: 'fund',
      required: false,
      unique: true
    },

    contributor: {
      model: 'contributor',
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
      birthday: new Date(attrs.BIRTHDAY),
      profession: attrs.JOB,
      employer: attrs.EMPLOYER
    };

    return parsed;
  },

  afterCreate(newRecord, cb) {
    User.update(newRecord.user, {person: newRecord.id}).then(function() {
      return next();
    });
  },

};
