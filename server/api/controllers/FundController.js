/**
* FundController
*
* @description :: Server-side actions for handling incoming requests.
* @help        :: See https://sailsjs.com/docs/concepts/actions
*/

module.exports = {
  /**
   * TODO
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  async postSubscription(req, res) {
    let attrs = req.allParams();
    let parsedAttrs = Fund.parseAttrs(attrs.subscription);
    let userId = req.query.accessUser.id;
    try {
      let person = await Person.findOne({user: userId});
      parsedAttrs.participant = person.id;

      if (person.subscription) {
        Fund.update({id: person.subscription}, parsedAttrs).meta({fetch: true}).then(() => {
          return res.ok({response: 'Dados atualizados.'});
        });
      } else {
        Fund.create(parsedAttrs).meta({fetch: true}).then(() => {
          return res.ok({response: 'Dados atualizados.'});
        });
      }
    } catch(err) {
      return res.serverError(err);
    }
  },

  /**
   * TODO
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  async postFatca(req, res) {
    let userId = req.query.accessUser.id;
    let attrs = {fatca: req.allParams().FATCA};

    try {
      let person = await Person.findOne({user: userId});

      if (person) {
        let subscription = await Fund.findOne({participant: person.id});

        if (subscription) {
          if (attrs.fatca === 'Sim') {
              Fund.update({id: subscription.id}, {facta: true}).meta({fetch: true}).then(() => {
                return res.ok({response: 'FATCA atualizad.'});
              });
          } else {
              Fund.update({id: subscription.id}, {facta: false}).meta({fetch: true}).then(() => {
                return res.ok({response: 'FATCA atualizado.'});
              });
          }
        }
      }
    } catch(err) {
      return res.serverError(err);
    }
  },

  /**
   * TODO
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  async fillSubscriptionPDF(req, res) {
    let userid = req.allParams()['user-id'];

    const fillPdf = require('fill-pdf');
    const encoding = require('encoding');

    try {
      let person = await Person.findOne({id: userid}).populate('user').populate('subscription');

      let pdfTemplatePath = '../../resources/subscription_template.pdf';
      let birthday;

      if (person.birthday !== null) {
        birthday = new Date(person.birthday);
      } else {
        birthday = new Date();
      }

      const payment_options = ['Transferencia', 'Deposito', 'Cheque', 'PPR'];
      const periodicity_options = ['Mensal', 'Trimestral', 'Semestral', 'Anual'];

      let formData = {
        //Participante
        Nome_Participante: person.name,
        Genero_Participante: person.genre.toLowerCase(),
        Morada_Participante: person.address,
        Localidade_Participante: person.area,
        Codigo_Postal_Participante: person.postal,
        Telefone_Participante: person.telephone,
        Telemovel_Participante: person.cellphone,
        Contribuinte_Participante: person.NIF,
        BI_Participante: person.identificationNumber,
        Dia_Nascimento_Participante: birthday.getDate(),
        Mes_Nascimento_Participante: birthday.getMonth() + 1,
        Ano_Nascimento_Participante: birthday.getFullYear(),
        Profissao_Participante: person.profession,
        Entidade_Patronal_Participante: person.employer,
        Email_Participante: person.user.email,
        Receber_Email: 'yes',
        //Subscrição
        Valor_Entrega: person.subscription.subscriptionValue,
        //Comissao_Subscricao: 20,
        //Comissao_Reembolso: 5,
        Forma_Pagamento: payment_options[person.subscription.paymentMethod], //'Transferencia' 'Deposito' ' Cheque'
        Numero_Cheque: person.subscription.checkNo,
        Banco: person.subscription.checkBank,
        //Transferencia_PPR: 'Yes',
        //SDD
        Nome: person.name,
        IBAN: person.subscription.accountNo,
        Valor_Mensal: person.subscription.debitAmount,
        Crescimento_Anual: person.subscription.debitGrowth,
        Periodicidade: periodicity_options[person.subscription.periodicity], //'Mensal' 'Trimestral' 'Semestral' 'Anual'
        Mes: (new Date(person.subscription.initialDate)).getMonth() + 1,
        Ano: (new Date(person.subscription.initialDate)).getFullYear() - 2000,
      };

      formData.Transferencia_PPR = person.subscription.paymentMethod == 4 ? 'Yes' : 'No';

      formData.Nome_Participante = encoding.convert(formData.Nome_Participante, 'ISO-8859-1', 'UTF-8');
      formData.Morada_Participante = encoding.convert(formData.Morada_Participante, 'ISO-8859-1', 'UTF-8');
      formData.Localidade_Participante = encoding.convert(formData.Localidade_Participante, 'ISO-8859-1', 'UTF-8');
      formData.Profissao_Participante = encoding.convert(formData.Profissao_Participante, 'ISO-8859-1', 'UTF-8');
      formData.Entidade_Patronal_Participante = encoding.convert(formData.Entidade_Patronal_Participante, 'ISO-8859-1', 'UTF-8');
      formData.Banco = encoding.convert(formData.Banco, 'ISO-8859-1', 'UTF-8');
      formData.Nome = encoding.convert(formData.Nome, 'ISO-8859-1', 'UTF-8');

      fillPdf.generatePdf(formData, pdfTemplatePath, ['drop_xfa','need_appearances'], function(err, output) {
        if ( !err ) {
          //Send pdf as response
          res.type('application/pdf');
          res.status(200);
          res.send(output);

          return res;
        }
        else{
          throw err;
        }
      });

    } catch(err) {
      return res.serverError(err);
    }
  },

  /**
   * TODO
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  async fillFatcaPDF(req, res) {
    let userid = req.allParams()['user-id'];

    const fillPdf = require('fill-pdf');
    const encoding = require('encoding');

    try {
      let person = await Person.findOne({id: userid}).populate('user').populate('subscription');

      let pdfTemplatePath = '../../resources/fatca_template.pdf';
      let date = new Date();
      let isUSPerson;
      (person.subscription.fatca) ? isUSPerson='yes' : isUSPerson='no';

      let formData = {
        NIF: person.NIF,
        name: person.name,
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        isUSPerson: isUSPerson,
        locale: 'Lisboa'
      };

      formData.name = encoding.convert(formData.name, 'ISO-8859-1', 'UTF-8');

      fillPdf.generatePdf(formData, pdfTemplatePath, ['drop_xfa','need_appearances'], function(err, output) {
        if ( !err ) {
          //Send pdf as response
          res.type('application/pdf');
          res.status(200);
          res.send(output);

          return res;
        }
        else{
          throw err;
        }
      });

    } catch(err) {
      return res.serverError(err);
    }
  },

  /**
   * TODO
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  async fillInvestorProfilePDF(req, res) {
    let userid = req.allParams()['user-id'];

    const fillPdf = require('fill-pdf');
    const encoding = require('encoding');

    try {
      let person = await Person.findOne({id: userid}).populate('user').populate('investorProfile');

      let pdfTemplatePath = '../../resources/investor_profile_template.pdf';
      let date = new Date();
      let age = Math.floor((date-(new Date(person.birthday)))/31557600000);
      let duration = ['< 1', '1 a 3', '> 3'];
      let percentage = ['< 25', '25 a 50', '> 50'];
      let goal = ['Preservar o capital', 'Crescer moderadamente', 'Crescer substancialmente'];
      let feeling = ['Insatisfeito', 'Razoavel', 'Muito satisfeito'];
      let risk = ['Nunca', 'Sim', 'Sem duvida'];
      let type = ['DA e CA', 'O e PG', 'Acoes'];
      let profitability = ['2 a 4', '5 a 9', '10 a 15'];

      let formData = {
        Nome: person.name,
        NIF: person.NIF,
        Idade: age,
        Prazo_Investimento: duration[person.investorProfile.duration - 1],
        Percentagem_Poupanca: percentage[person.investorProfile.percentage - 1],
        Objetivo: goal[person.investorProfile.goal - 1],
        Como_Se_Sente: feeling[person.investorProfile.feeling - 1],
        Risco: risk[person.investorProfile.risk - 1],
        Ativos: type[person.investorProfile.type - 1],
        Rentabilidade: profitability[person.investorProfile.profitability - 1],
        Dia: date.getDate(),
        Mes: date.getMonth() + 1,
        Ano: date.getFullYear(),
      };

      formData.Nome = encoding.convert(formData.Nome, 'ISO-8859-1', 'UTF-8');

      fillPdf.generatePdf(formData, pdfTemplatePath, ['drop_xfa','need_appearances'], function(err, output) {
        if ( !err ) {
          //Send pdf as response
          res.type('application/pdf');
          res.status(200);
          res.send(output);

          return res;
        }
        else{
          throw err;
        }
      });

    } catch(err) {
      return res.serverError(err);
    }
  },

  /**
   * TODO
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  async sendEmail(req, res) {
    let userid = req.query.accessUser.id;
    let person, token;
    try {
      person = await Person.findOne({user: userid}).populate('user').populate('investorProfile');
    } catch(err) {
      return res.serverError(err);
    }

    if (!person) {
      return res.badRequest({response: 'This email doesn\'t exist in our platform.'});
    }

    try {
      token = await Token.findOrAdd({user: person.user, type: 'reset'});
    } catch (err) {
      return res.serverError(err);
    }

    let email = sails.config.custom.email;
    email.send({
      template: 'onboarding',
      message: {
        to: person.user.email,
        attachments: [
          {   // Subscription PDF
            filename: 'subscription.pdf',
            path: 'http://localhost:1337/subscription?user-id=' + person.id
          },
          {   // Investor Profile PDF
            filename: 'investor_profile.pdf',
            path: 'http://localhost:1337/investorprofile?user-id=' + person.id
          },
          {   // FATCA PDF
            filename: 'fatca.pdf',
            path: 'http://localhost:1337/fatca?user-id=' + person.id
          }
        ]
      },
      locals: {
        name: person.user.firstName + ' ' + person.user.lastName,
        token: token.value,
        causeName: person.user.causeName,
      },
    }).then(() => {
      return res.ok({response: 'An email was sent to this account.'});
    }).catch((err) => {
      return res.serverError(err);
    });
  }
};
