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

  createSubscriptionPDF(req, res){
    //let encoding = require('encoding');
    let fillPdf = require("fill-pdf");

    let parsedAttrs = Fund.parseAttrs(req.allParams());
    let participantAttrs = parsedAttrs.participant;
    let userid = req.headers['user-id'];

    try {
      let user = await User.findOne({id: userid});
      let person = await Person.findOne({id: userid}).populate('subscription');

      let pdfTemplatePath = "";
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
        Dia_Nascimento_Participante: '18',
        Mes_Nascimento_Participante: '12',
        Ano_Nascimento_Participante: '1996',
        Profissao_Participante: person.profession,
        Entidade_Patronal_Participante: person.employer,
        Email_Participante: user.email,
        Receber_Email: 'yes',
        /*//Subscrição
        Valor_Entrega: 200,
        Comissao_Subscricao: 20,
        Comissao_Reembolso: 5,
        Forma_Pagamento: 'Cheque', //'Transferencia' 'Deposito' ' Cheque'
        Numero_Cheque: '1234567789999999',
        Banco: 'BCP',
        Transferencia_PPR: 'Yes',
        /* //SDD
        Nome: 'Inês Filipa Noronha Meneses Gomes Proença',
        IBAN: '1234123412341234567891212',
        Valor_Mensal: 50,
        Crescimento_Anual: 20,
        Periodicidade: 'Mensal', //'Mensal' 'Trimestral' 'Semestral' 'Anual'
        Mes: 11,
        Ano: 2017,*/
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
  }

};
