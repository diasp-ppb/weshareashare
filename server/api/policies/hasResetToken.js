/**
 * hasResetToken policy
 **/

module.exports = (req, res, next) => {
  const params = req.allParams();
  if(!params.Token){
    return res.unauthorized();
  }

  Token.findOne({
    type: 'reset',
    value: params.Token,
    expiresAt: { '>=': new Date() },
  }).then((token) => {
    if (!token) {
      return res.unauthorized();
    }
    return next();
  }).catch((err) => {
    return res.serverError(err);
  });
};
