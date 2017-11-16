/**
 * ContactUsController
 *
 * @description :: Server-side logic for managing the contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  async create(req, res) {
    let params = req.allParams();

    if(!params.firstName || !params.lastName || !params.email || !params.subject || !params.message) {
      return res.badRequest();
    }

    let contact;
    try {
      contact = await ContactUs.create(params).meta({fetch: true});
    } catch (err) {
      return res.serverError(err);
    }

    let email = sails.config.custom.email;
    email.send({
      template: 'contactUs',
      message: {
        subject: params.subject,
        to: 'weshareashare@gmail.com' // or some shit like that
      },
      locals: {
        contact: contact,
      }
    })
    return res.ok({response: 'Thank you for you contact. We\'ll answer as soon as possible'});
  },
};
