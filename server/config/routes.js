/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'post /clients': {
    controller: 'ClientController',
    action: 'create',
  },

  'post /admins': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'AdminController',
    action: 'create',
  },

  'post /admins/auth': {
    cors: {
      allowOrigins: '*',
      allowRequestHeaders: 'Content-Type, client-id, Authorization',
    },
    controller: 'AdminController',
    action: 'signin',
  },

  'post /users': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'UserController',
    action: 'create',
  },

  'post /causes': {
    controller: 'CauseController',
    action: 'create',
  },

  'get /users/:userId/cause': {
    controller: 'UserController',
    action: 'getCause',
  },

  'post /users/auth': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID, Authorization',
    },
    controller: 'UserAuthController',
    action: 'signin',
  },

  'post /users/auth/refresh': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'UserAuthController',
    action: 'refresh',
  },

  'post /users/auth/revoke': {
    controller: 'UserAuthController',
    action: 'revoke',
  },

  'post /users/auth/resetRequest': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'UserAuthController',
    action: 'resetRequest',
  },

  'post /users/auth/resetPassword': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'UserAuthController',
    action: 'resetPassword',
  },

  'post /users/:userId/selectCause/:causeId': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'UserController',
    action: 'selectCause',
  },

  'post /contactUs': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'ContactUsController',
    action: 'create',
  },

  'post /documents': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'DocumentController',
    action: 'upload',
  },

  'delete /documents/:id': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'DocumentController',
    action: 'delete',
  },

  'post /participant': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'PersonController',
    action: 'postParticipant',
  },

  'post /subscription': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'FundController',
    action: 'postSubscription',
  },

  'post /investor': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'ProfileController',
    action: 'postInvestorProfile',
  },

  'post /fatca': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'FundController',
    action: 'postFatca',
  },

  'get /subscription': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'FundController',
    action: 'fillSubscriptionPDF',
  },

  'get /fatca': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'FundController',
    action: 'fillFatcaPDF',
  },

  'get /investorprofile': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'FundController',
    action: 'fillInvestorProfilePDF',
  },

  'post /onboardingEmail': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'FundController',
    action: 'sendEmail',
  },
};
