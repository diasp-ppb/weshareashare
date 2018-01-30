/**
 * Verifies if the user has a client id
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports = (req, res, next) => {
  let clientID = req.headers['client-id'];
  if(!clientID){
    return res.unauthorized();
  }
  Client.findOne({
    id: clientID
  }).then((client)  => {
    if(!client) {
      return res.unauthorized();
    }
    return next();
  }).catch((err) => {
    return res.unauthorized(err);
  });
};
