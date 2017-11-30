const FormValidation = require('tcomb-form-native');

/**
 * Password Validation - Must be 6 chars long
 */
export const validPassword = FormValidation.refinement(
  FormValidation.String, (password) => {
    if (password.length < 8) return false; // Too short
    if (password.search(/\d/) === -1) return false; // No numbers
    if (password.search(/[a-zA-Z]/) === -1) return false; // No letters
    return true;
  },
);

/**
 * Email Validation
 */
export const validEmail = FormValidation.refinement(
  FormValidation.String, (email) => {
    const regularExpression = /^.+@.+\..+$/i;

    return regularExpression.test(email);
  },
);

