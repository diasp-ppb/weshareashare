/**
 * hasClientId policy
 */

module.exports = (req, res, next) => {
  let clientID = req.headers['Client-ID'];
  Client.find({id: clientID})
    .then(()  => {
      return next();
    }).catch((err) => {
      return res.unauthorized(err);
    });
};
