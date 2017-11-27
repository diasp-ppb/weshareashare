/**
 * hasResetToken policy
 **/

module.exports = (req, res, next) => {
  const params = req.allParams();
  if(!params.token){
    return res.unauthorized();
  }
  console.log(params.token)

  Token.findOne({
    type: 'reset',
    value: params.token.value,
    expiresAt: { '>=': new Date() },
  }).then((token) => {
    console.log(token)
    if (!token) {
      return res.unauthorized();
    }
    return next();
  }).catch((err) => {
    return res.serverError(err);
  });
};
