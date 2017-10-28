/**
 * ClientController
 *
 * @description :: Server-side logic for managing Clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create(req, res) {
    let params = Client.parseAttrs(req.allParams());
    Client.create(params)
      .then(() => {
        return res.ok({response: 'Client created!'});
      })
      .catch(err => {
        return res.serverError(err);
      });
  },
};

