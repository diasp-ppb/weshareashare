
module.exports = {

  friendlyName: 'Waterline errors messages',

  description: 'Custom messages to the errors received from waterline',

  inputs: {
    model: {
      friendlyName: 'Model to validate',
      description: 'Model with information about the attributes',
      type: 'ref'
    },
    err: {
      description: 'Errors retrieved from waterline',
      type: 'json'
    },
    currLocale: {
      description: 'Current locale retrieved from the request',
      type: 'string'
    }
  },


  fn: function (inputs, exits) {
    let customErrors = [];
    let data = JSON.stringify(inputs.err);
    let model = inputs.model;
    let identity = model.identity;

    let attrs = _.omit(_.mapValues(model.attributes, (v) => {
      let validations = {};
      if(v.autoMigrations && v.autoMigrations.unique) {
        validations['unique'] = true;
      }

      if(v.required) {
        validations['required'] = true;
      }

      if(v.validations) {
        return Object.assign(validations, v.validations);
      }
      return validations;
    }), (o => _.isEmpty(o)));

    _.forEach(attrs, (valFields, attr) => {

      _.forEach(valFields, (value, field) => {
        const phrase = [
          identity,
          attr,
          field
        ].join('.');

        let customMessage = phrase;
        let locale;

        if(sails.config.i18n){
          locale = inputs.currLocale || sails.config.i18n.defaultLocale;

          if(locale){
            customMessage = sails.__([customMessage, locale]);
          }

        }

        if(customMessage !== phrase && typeof customMessage === 'string') {

          const newError = {
            'attribute': attr,
            'validation': value,
            'message': customMessage
          };
          customErrors.push(newError);
        }
      });
    });

    return exits.success();
  }
};

