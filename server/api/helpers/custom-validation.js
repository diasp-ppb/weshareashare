
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
  },


  fn: function (inputs, exits) {
    let customErrors = [];
    let data = _.pick(inputs.err, ['code', 'details', 'attrNames']);
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
    }), ((o, k) => _.isEmpty(o) || k === 'id'));

    _.forEach(attrs, (valFields, attr) => {

      let index = _.indexOf(data.attrNames, attr);
      if(index === -1 && !_.includes(data.details, attr)) {
        return;
      }

      _.forEach(valFields, (value, field) => {
        if((data.code === 'E_UNIQUE' && field === 'unique') ||
          (data.code === 'E_INVALID_NEW_RECORD' && field === 'required' && _.includes(data.details, 'required')) ||
          (data.code === 'E_INVALID_NEW_RECORD' && field === 'maxLength' && _.includes(data.details, 'maximum length')) ||
          (data.code === 'E_INVALID_NEW_RECORD' && field === 'minLength' && _.includes(data.details, 'minimum length')) ||
          (data.code === 'E_INVALID_NEW_RECORD' && field === 'isEmail' && _.includes(data.details, 'valid email address'))
        ) {
          console.log(field);
        } else {
          return;
        }

        const phrase = [
          identity,
          attr,
          field
        ].join('.');

        let customMessage = phrase;
        if(sails.config.i18n){
          customMessage = sails.__(customMessage);
        }

        if (!(customMessage !== phrase && typeof customMessage ===
            'string')) {} else {
          const newError = {
            'attribute': attr,
            'message': customMessage,
            'rule': {},
          };
          newError['rule'][field] = value;
          customErrors.push(newError);
        }
      });
    });

    if(_.isEmpty(customErrors)) {
      return exits.success(inputs.err);
    }
    else {
      return exits.success(customErrors);
    }
  }
};

