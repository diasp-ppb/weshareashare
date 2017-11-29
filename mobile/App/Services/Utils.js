const t = require('tcomb-form-native');

export const Password = t.refinement(t.String, (psw) => {
  return psw.length >= 8;
});

export const Email = t.refinement(t.String, (email) => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

export const samePasswords = (x) => {
  return x.password === x.repeatPassword;
};

