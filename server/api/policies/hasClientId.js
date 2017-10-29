/**
 * hasClientId policy
 */

module.exports = (req, res, next) => {
  let clientID = req.headers['client-id'];
  Client.find({id: clientID})
    .then((client)  => {
      if(client.length === 0) {
        return res.unauthorized();
      }
      return next();
    }).catch((err) => {
      return res.unauthorized(err);
    });
};
