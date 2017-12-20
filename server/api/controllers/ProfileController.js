/**
* FundController
*
* @description :: Server-side actions for handling incoming requests.
* @help        :: See https://sailsjs.com/docs/concepts/actions
*/

module.exports = {
  async postInvestorProfile(req, res) {
    let investorAttrs = Profile.parseAttrs(req.allParams());
    let userId = req.query.accessUser.id;

    try {
      let person = await Person.findOne({user: userid});
      investorAttrs.person = person.id;

      if (person.investorProfile) {
        Profile.update({id: person.investorProfile}, investorAttrs).meta({fetch: true}).then(() => {
          return res.ok({response: 'Perfil de investidor atualizado.'});
        });
      } else {
        Profile.create(investorAttrs).meta({fetch: true}).then(() => {
          return res.ok({response: 'Perfil de investidor atualizado.'});
        });
      }
    } catch(err) {
      return res.serverError(err);
    }
  },
};
