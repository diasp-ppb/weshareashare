/**
* FundController
*
* @description :: Server-side actions for handling incoming requests.
* @help        :: See https://sailsjs.com/docs/concepts/actions
*/

const getScoreResponse = (profiles, birthday) => {
    let profile = profiles[0];

    let date = new Date();
    let age = Math.floor((date - birthday) / 31557600000);
    let ageScore = (age < 36) ? 1 : (age > 54) ? 3 : 2

    let duration = [3, 2, 1];
    let percentage = [1, 2, 3];
    let goal = [6, 4, 2];
    let feeling = [6, 4, 2];
    let risk = [3, 2, 1];
    let type = [2, 2, 0];
    let profitability = [6, 4, 2];

    let score = ageScore +
      duration[profile.duration -1] +
      percentage[profile.percentage - 1] +
      goal[profile.goal -1] +
      feeling[profile.feeling - 1] +
      risk[profile.risk - 1] +
      type[profile.type -1] +
      profitability[profile.profitability - 1];

    if (score < 15) {
      return "Investidor Dinâmico: " + score + " pontos.";
    } else if (score < 20) {
      return "Investidor Moderadamente Dinâmico: " + score + " pontos.";
    } else if (score < 24) {
      return "Investidor Moderadamente Defensivo: " + score + " pontos.";
    } else {
      return "Investidor Defensivo: " + score + " pontos.";
    }
};

module.exports = {
  async postInvestorProfile(req, res) {
    let investorAttrs = Profile.parseAttrs(req.allParams().investor);
    let userId = req.query.accessUser.id;

    try {
      let person = await Person.findOne({user: userId});

      if (person) {
        investorAttrs.person = person.id;

        if (person.investorProfile) {
          Profile.update({id: person.investorProfile}, investorAttrs).meta({fetch: true}).then((profile) => {
            let scoreResponse = getScoreResponse(profile, person.birthday);
            sails.log(scoreResponse);
            return res.ok({response: scoreResponse});
          });
        } else {
          Profile.create(investorAttrs).meta({fetch: true}).then((profile) => {
            Person.update({id: person.id}, {investorProfile: profile.id}).meta({fetch: true}).then((profile) => {
              let scoreResponse = getScoreResponse(profile, person.birthday);
              sails.log(scoreResponse);
              return res.ok({response: scoreResponse});
            });
          });
        }
      } else {
        return res.forbidden({response: "Preencha os seus dados pessoais primeiro, por favor."});
      }
    } catch(err) {
      return res.serverError(err);
    }
  },


};
