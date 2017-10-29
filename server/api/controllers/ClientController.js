/**
 * ClientController
 *
 * @description :: Server-side logic for managing Clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create(req, res) {
    let params = Client.parseAttrs(req.allParams());
    Client.create(params).meta({fetch: true})
      .then((client) => {
        return res.ok({ client });
      })
      .catch(err => {
        return res.serverError(err);
      });
  },
};

