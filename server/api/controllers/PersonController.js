/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async postParticipant(req, res) {
    let attrs = req.allParams();
    let parsedAttrs = Person.parseAttrs(attrs);
    let participantAttrs = parsedAttrs.participant;

    let userId = req.query.accessUser.id;
    participantAttrs['user'] = userId;

    try {
      let user = await User.findOne({id: userId});

      if (user.person) {
        Person.update(user.person, participantAttrs).meta({fetch: true}).then();
      } else {
        Person.create(participantAttrs).meta({fetch: true}).then();
      }
    } catch(err) {
      return res.serverError(err);
    }
  }
};
