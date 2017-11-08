/**
 * Document.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      required: true,
      unique: true,
      type: 'string',
      maxLength: 64,
    },
    mimeType: {
      type: 'string',
      required: true,
      isIn: ['.xls', '.pdf', '.png' ,'.csv', '.doc', '.html', '.json', '.jpg', '.jpeg']
    },

    owner: {
      model: 'user'
    }
  },

};

