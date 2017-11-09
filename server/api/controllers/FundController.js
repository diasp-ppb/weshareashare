/**
 * FundController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  postSubscription(req, res) {
    parsedAttrs = Fund.parseAttrs(req.allParams());
    return res.ok();
  },

  postFacta(req, res) {
    return res.ok();
  },

  postInvestorProfile(req, res) {
    return res.ok();
  },

};
