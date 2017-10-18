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
  'post /visitors': 'ClientsController.create',

  'post /users': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'UsersController',
    action: 'create',
  },

  'post /users/auth': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID, Authorization',
    },
    controller: 'UsersAuthController',
    action: 'signin',
  },

  'post /users/auth/refresh': {
    cors: {
      allowRequestHeaders: 'Content-Type, Client-ID',
    },
    controller: 'UsersAuthController',
    action: 'refresh',
  },

  'post /users/auth/revoke': 'UsersAuthController.revoke',
  'get /users': 'UsersController.getAll',
};
