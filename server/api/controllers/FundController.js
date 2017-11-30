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

    const fillPdf = require("fill-pdf");
    const encoding = require('encoding');

    try {
      let user = await User.findOne({id: userid});

      if (user.person) {
        Person.update(user.person, participantAttrs).meta({fetch: true}).then();
      } else {
        Person.create(participantAttrs).meta({fetch: true}).then();
      }

      let person = await Person.findOne({user: userid});

      parsedAttrs.participant = userid;
      if(person.subscription){
        Fund.update(person.subscription, parsedAttrs).meta({fetch: true}).then();
      } else {
        Fund.create(parsedAttrs).meta({fetch: true}).then();
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

  async fillSubscriptionPDF(req, res) {
    let userid = req.headers['user-id'];

    const fillPdf = require("fill-pdf");
    const encoding = require('encoding');

    try {
      let person = await Person.findOne({id: userid}).populate('user').populate('subscription');

      let pdfTemplatePath = "../../resources/subscription_template.pdf";
      let birthday;

      if(person.birthday != null){
        birthday = person.birthday;
      }else{
        birthday = new Date();
      }

      const payment_options = ['Transferencia', 'Deposito', ' Cheque'];
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
        Forma_Pagamento: payment_options[person.subscription.paymentMethod-1], //'Transferencia' 'Deposito' ' Cheque'
        Numero_Cheque: person.subscription.checkNo,
        Banco: person.subscription.checkBank,
        Transferencia_PPR: 'Yes',
        //SDD
        Nome: person.name,
        IBAN: person.subscription.accountNo,
        Valor_Mensal: person.subscription.debitAmount,
        Crescimento_Anual: person.subscription.debitGrowth,
        Periodicidade: periodicity_options[person.subscription.periodicity-1], //'Mensal' 'Trimestral' 'Semestral' 'Anual'
        Mes: (person.subscription.initialDate).getMonth() + 1,
        Ano: (person.subscription.initialDate).getFullYear(),
      };

      formData.Nome_Participante = encoding.convert(formData.Nome_Participante, 'ISO-8859-1', 'UTF-8');
      formData.Morada_Participante = encoding.convert(formData.Morada_Participante, 'ISO-8859-1', 'UTF-8');
      formData.Nome = encoding.convert(formData.Nome, 'ISO-8859-1', 'UTF-8');

      fillPdf.generatePdf(formData, pdfTemplatePath, ['drop_xfa','need_appearances'], function(err, output) {
        if ( !err ) {
          //save output somewhere
          var filepath = "./resources/filled/subscription_" + userid + ".pdf"
          var fs = require('fs');
          fs.writeFile(filepath, output, function(err) {
              if(err) {
                  return console.log(err);
              }

              console.log("The file was saved!");
          });
        }
        else{
          throw err;
        }
      });

    } catch(err) {
      return res.serverError(err);
    }

    return res.ok();
  },

  async fillFatcaPDF(req, res) {
    let userid = req.headers['user-id'];

    const fillPdf = require("fill-pdf");
    const encoding = require('encoding');

    try {
      let person = await Person.findOne({id: userid}).populate('user').populate('subscription');

      let pdfTemplatePath = "../../resources/fatca_template.pdf";
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
          console.log(formData);

          //save output somewhere
          var filepath = "./resources/filled/fatca_" + userid + ".pdf"
          var fs = require('fs');
          fs.writeFile(filepath, output, function(err) {
              if(err) {
                  return console.log(err);
              }

              console.log("The file was saved!");
          });
        }
        else{
          throw err;
        }
      });

    } catch(err) {
      return res.serverError(err);
    }

    return res.ok();
  },

};
