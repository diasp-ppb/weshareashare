/**
 * CauseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   * Creates a new cause.
   * @param req
   * @param res
   */
  create(req, res) {
    let params = req.allParams();
    Cause.create(
      {
        name: params.name,
        category: params.category,
        image: params.image,
        shortDescription: params.shortDescription, // short description to show on cause overview page
        description: params.description}).meta({fetch: true}) // full description for detailed cause page
      .then((cause) => {
        return res.ok(cause);
      })
      .catch((err) => {
        return res.serverError(err);
      });
  },

  /**
   * Returns all causes available
   * @param req
   * @param res
   */
  getAll(req, res) {
    Cause.find()
    .then((causes) => {
      res.ok(causes);
    }).catch((err) => {
      return res.serverError(err);
    });
  },
};
