/**
 * CauseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create(req, res) {
    let params = req.allParams();
    Cause.create(
      {
        name: params.name,
        category: params.category,
        image: params.image,
        shortDescription: params.shortDescription,
        description: params.description}).meta({fetch: true})
      .then((cause) => {
        return res.ok(cause);
      })
      .catch((err) => {
        return res.serverError(err);
      });
  },
  
  getAll(req, res) {
    Cause.find()
    .then((causes) => {
      res.ok(causes);
    }).catch((err) => {
      return res.serverError(err);
    });
  },
};
