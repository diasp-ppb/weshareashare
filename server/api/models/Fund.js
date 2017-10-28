/**
 * Fund.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    NIF: {
      type: 'number',
      required: true,
    },
    IBAN: {
      type: 'number',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    address: {
      type: 'string',
      allowNull: true
    },

    benefits: {
      collection: 'benefit',
      via: 'provider'
    },

    assets: {
      collection: 'asset',
      via: 'entity'
    }
  },

};

