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

    let fillPdf = require("fill-pdf");

    try {
      let user = await User.findOne({id: userid});

      if (user.person) {
        Person.update(user.person, participantAttrs).meta({fetch: true}).then();
      } else {
        Person.create(participantAttrs).meta({fetch: true}).then();
      }

      let person = await Person.findOne({id: userid}).populate('subscription');

      let pdfTemplatePath = "../../resources/subscription_template.pdf";
      let birthday = new Date(/*person.birthday*/);

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
        Mes_Nascimento_Participante: birthday.getMonth(),
        Ano_Nascimento_Participante: birthday.getFullYear(),
        Profissao_Participante: person.profession,
        Entidade_Patronal_Participante: person.employer,
        Email_Participante: user.email,
        Receber_Email: 'yes',
        /* /Subscrição
        Valor_Entrega: person.subscription.subscriptionValue,
        //Comissao_Subscricao: 20,
        //Comissao_Reembolso: 5,
        Forma_Pagamento: person.subscription.paymentMethod, //'Transferencia' 'Deposito' ' Cheque'
        Numero_Cheque: person.subscription.checkNo,
        Banco: person.subscription.checkBank,
        Transferencia_PPR: 'Yes',
        //SDD
        Nome: person.name,
        IBAN: person.subscription.accountNo,
        Valor_Mensal: person.subscription.debitAmount,
        Crescimento_Anual: person.subscription.debitGrowth,
        Periodicidade: person.subscription.periodicity, //'Mensal' 'Trimestral' 'Semestral' 'Anual'
        Mes: 11,
        Ano: 2017,*/
      };

      //formData.Nome_Participante = encoding.convert(formData.Nome_Participante, 'ISO-8859-1', 'UTF-8');
      //formData.Morada_Participante = encoding.convert(formData.Morada_Participante, 'ISO-8859-1', 'UTF-8');
      //formData.Nome = encoding.convert(formData.Nome, 'ISO-8859-1', 'UTF-8');

      fillPdf.generatePdf(formData, pdfTemplatePath, ['drop_xfa','need_appearances'], function(err, output) {
        if ( !err ) {
          console.log(formData);
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

  postFacta(req, res) {
    return res.ok();
  },

  postInvestorProfile(req, res) {
    return res.ok();
  },

  /*createSubscriptionPDF(req, res){
    //let encoding = require('encoding');
    let fillPdf = require("fill-pdf");

    let parsedAttrs = Fund.parseAttrs(req.allParams());
    let participantAttrs = parsedAttrs.participant;
    let userid = req.headers['user-id'];

    try {
      let user = await User.findOne({id: userid});
      let person = await Person.findOne({id: userid}).populate('subscription');

      let pdfTemplatePath = "";
      let birthday = new Date(person.birthday);

      let formData = {
        //Participante
        Nome_Participante: person.name,
        Genero_Participante: person.genre,
        Morada_Participante: person.address,
        Localidade_Participante: person.area,
        Codigo_Postal_Participante: person.postal,
        Telefone_Participante: person.telephone,
        Telemovel_Participante: person.cellphone,
        Contribuinte_Participante: person.NIF,
        BI_Participante: person.identificationNumber,
        Dia_Nascimento_Participante: birthday.getDate(),
        Mes_Nascimento_Participante: birthday.getMonth(),
        Ano_Nascimento_Participante: birthday.getFullYear(),
        Profissao_Participante: person.profession,
        Entidade_Patronal_Participante: person.employer,
        Email_Participante: user.email,
        Receber_Email: 'yes',
        //Subscrição
        Valor_Entrega: person.subscription.subscriptionValue,
        //Comissao_Subscricao: 20,
        //Comissao_Reembolso: 5,
        Forma_Pagamento: person.subscription.paymentMethod, //'Transferencia' 'Deposito' ' Cheque'
        Numero_Cheque: person.subscription.checkNo,
        Banco: person.subscription.checkBank,
        Transferencia_PPR: 'Yes',
        //SDD
        Nome: person.name,
        IBAN: person.subscription.accountNo,
        Valor_Mensal: person.subscription.debitAmount,
        Crescimento_Anual: person.subscription.debitGrowth,
        Periodicidade: person.subscription.periodicity, //'Mensal' 'Trimestral' 'Semestral' 'Anual'
        Mes: 11,
        Ano: 2017,
      };

      //formData.Nome_Participante = encoding.convert(formData.Nome_Participante, 'ISO-8859-1', 'UTF-8');
      //formData.Morada_Participante = encoding.convert(formData.Morada_Participante, 'ISO-8859-1', 'UTF-8');
      //formData.Nome = encoding.convert(formData.Nome, 'ISO-8859-1', 'UTF-8');

      fillPdf.generatePdf(formData, pdfTemplatePath, ['drop_xfa','need_appearances'], function(err, output) {
        if ( !err ) {
          //res.type("application/pdf");
          //res.send(output);
        }
        else{
          throw err;
        }
      });

      console.log(person);
      console.log(formData);
    } catch(err) {
      return res.serverError(err);
    }

    return res.ok();
  }*/

};
