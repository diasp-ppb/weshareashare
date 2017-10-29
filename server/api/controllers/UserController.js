/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create(req, res) {
    let params = User.parseAttrs(req.allParams());
    User.create(params).meta({fetch: true})
      .then((user) => {
        return res.created({user});
      }).catch((err) => {
        return res.serverError(err);
      });
  },

  getAll(req, res) {
    User.find()
      .then((users) => {
        res.ok({ users });
      }).catch((err) => {
        return res.serverError(err);
      });
  },
};

