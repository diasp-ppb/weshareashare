/**
 * hasClientId policy
 */

module.exports = (req, res, next) => {
  let clientID = req.headers['client-id'];
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
