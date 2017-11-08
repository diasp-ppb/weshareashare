/**
 * hasResetToken policy
 **/

module.exports = (req, res, next) => {
  const params = req.allParams();
  if(!params.token || params.token.type !== 'reset'){
    return res.unauthorized();
  }

  Token.findOne({
    type: params.token.type,
    value: params.token.value,
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
