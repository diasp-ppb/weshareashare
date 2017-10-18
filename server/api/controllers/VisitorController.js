/**
 * VisitorController
 *
 * @description :: Server-side logic for managing Visitors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create(req, res) {
    Visitors.add(req.allParams(), (err, visitor) => {
      if (err) {
        return res.negotiate(err);
      }
      return res.created({ visitor });
    });
  },
};

