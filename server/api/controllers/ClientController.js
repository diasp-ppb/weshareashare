/**
 * ClientController
 *
 * @description :: Server-side logic for managing Clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const uid = require('rand-token').uid;
const ID_LENGTH = 32;

module.exports = {
  create(req, res) {
    Client.create({id: uid(ID_LENGTH)}).meta({fetch: true})
      .then((client) => {
        console.log(client)
        return res.ok({ client });
      })
      .catch(err => {
        return res.serverError(err);
      });
  },
};

