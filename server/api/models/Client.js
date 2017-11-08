/**
 * Visitor.js
 *
 * @description :: Represents a user that is not authenticated
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  updatedAt: false,
  attributes: {
    id: {
      type: 'string',
      required: true,
    },
  },
};

