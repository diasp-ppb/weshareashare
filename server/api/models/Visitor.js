/**
 * Visitor.js
 *
 * @description :: Represents a user that is not authenticated
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const uid = require('rand-token').uid;

const ID_LENGTH = 32;

module.exports = {
  updatedAt: false,
  attributes: {
    id: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
  },

  add(attrs, next) {
    return this.create({
      id: uid(ID_LENGTH),
      name: String(attrs.name).trim(),
    }).exec(next);
  },
};

