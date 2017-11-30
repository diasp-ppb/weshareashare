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

  'post /users': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'UserController',
    action: 'create',
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

  'get /users': {
    controller: 'UserController',
    action: 'getAll',
  },
};
