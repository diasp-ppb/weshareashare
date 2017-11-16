/**
 * FundController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async postSubscription(req, res) {
    let parsedAttrs = Fund.parseAttrs(req.allParams());
    let participantAttrs = parsedAttrs.participant;
    let userid = req.headers['user-id'];

    participantAttrs['user'] = userid;

    try {
      let user = await User.findOne({id: userid});

      if (user.person) {
        Person.update(user.person, participantAttrs).meta({fetch: true}).then();
      } else {
        Person.create(participantAttrs).meta({fetch: true}).then();
      }
    } catch(err) {
      return res.serverError(err);
    }

    return res.ok();
  },

  postFacta(req, res) {
    return res.ok();
  },

  postInvestorProfile(req, res) {
    return res.ok();
  },

};
