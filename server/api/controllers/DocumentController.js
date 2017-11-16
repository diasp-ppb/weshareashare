/**
 * DocumentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async upload(req, res) {
    // WARNING!!!!!!! When sending the parameters, the text param always comes first
    let params = req.allParams();
    let file = req.file();

    if(!file || !params) {
      return res.badRequest();
    }

    let document;
    try {
      document = Document.create({name: params.name, owner: params.accessUser.id, mimeType: mimeType}).meta({fetch: true});
    } catch (err) {
      return res.serverError(err);
    }

  },

  async delete(req, res) {

  }
};
