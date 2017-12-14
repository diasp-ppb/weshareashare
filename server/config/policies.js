/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/isLoggedIn.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "isLoggedIn")
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */


module.exports.policies = {

  '*': 'hasOAuthBearer',

  ClientController: {
    create: [],
  },

  AdminController: {
    create: ['hasClientId'],
    signin: ['hasClientId'],
  },

  UserController: {
    create: ['hasClientId'],
    getAll: [],
    selectCause: ['hasOAuthBearer'],
  },

  UserAuthController: {
    '*': 'hasClientId',
    refresh: ['hasClientId', 'hasRefreshToken'],
    revoke: ['hasOAuthBearer'],
    resetRequest: ['hasClientId'],
    resetPassword: ['hasClientId', 'hasResetToken'],
  },

  ContactUsController: {
    create: ['hasClientId'],
  },

  DocumentController: {
    '*': 'hasOAuthBearer'
  },

  FundController: {
    '*': 'hasClientId',
    fillSubscriptionPDF: [],
    fillFatcaPDF: [],
    fillInvestorProfilePDF: [],
  },
};
