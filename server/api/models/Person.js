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
      required: false,
    },

    genre: {
      type: 'string',
      required: false
    },

    address: {
      type: 'string',
      required: false
    },

    area: {
      type: 'string',
      required: false
    },

    postal: {
      type: 'string',
      required: false
    },

    telephone: {
      type: 'string',
      required: false
    },

    cellphone: {
      type: 'string',
      required: false
    },

    NIF: {
      type: 'string',
      required: false,
      unique: true
    },

    identificationNumber: {
      type: 'string',
      required: false,
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
      required: false,
    },

    employer: {
      type: 'string',
      required: false,
    },

    subscription: {
      model: 'fund',
      required: false,
      unique: true
    },

    investorProfile: {
      model: 'profile'
    }
  },

  parseAttrs(attrs) {
    return {
      name: (attrs.NAME == null)? '' : attrs.NAME,
      genre: attrs.GENDER,
      address: (attrs.ADDRESS == null)? '' : attrs.ADDRESS,
      area: (attrs.AREA == null)? '' : attrs.AREA,
      postal: (attrs.POSTAL == null)? '' : attrs.POSTAL,
      telephone: (attrs.TELEPHONE == null)? '' : attrs.TELEPHONE,
      cellphone: (attrs.CELLPHONE == null)? '' : attrs.CELLPHONE,
      NIF: (attrs.NIF == null)? '' : attrs.NIF,
      identificationNumber: (attrs.ID == null)? '' : attrs.ID,
      birthday: new Date(attrs.BIRTHDAY),
      profession: (attrs.JOB == null)? '' : attrs.JOB,
      employer: (attrs.EMPLOYER == null)? '' : attrs.EMPLOYER,
    };
  },

  afterCreate(newRecord, cb) {
    User.update(newRecord.user, {person: newRecord.id}).then(function() {
      return newRecord.user;
    });
  },

};
