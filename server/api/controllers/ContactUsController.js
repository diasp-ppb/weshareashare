/**
 * ContactUsController
 *
 * @description :: Server-side logic for managing the contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * Creates a new instance of contact us, created by an user (authenticated or not)
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  async create(req, res) {
    let params = req.allParams();

    if(!params.FirstName || !params.LastName || !params.Email || !params.Subject || !params.Message) {
      return res.badRequest({response: 'Invalid parameters'});
    }

    let contact;
    try {
      contact = await ContactUs.create({
        firstName: params.FirstName,
        lastName: params.LastName,
        email: params.Email,
        subject: params.Subject,
        message: params.Message
      }).meta({fetch: true});
    } catch (err) {
      return res.serverError(err);
    }

    let email = sails.config.custom.email;
    email.send({
      template: 'contactUs',
      message: {
        subject: params.Subject,
        to: 'weshareasharetest@gmail.com'
      },
      locals: {
        contact: contact,
      }
    });
    return res.ok({response: 'Thank you for you contact. We\'ll answer as soon as possible'});
  },
};
