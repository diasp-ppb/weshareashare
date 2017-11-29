/**
 * hasRefreshToken policy
 */

module.exports = (req, res, next) => {
  const params = req.allParams();
  if (!params.token || params.token.type !== 'refresh' || !params.user.id) {
    return res.unauthorized();
  }

  Token.findOne({
    type: params.token.type,
    value: params.token.value,
    user: params.user.id,
    expiresAt: { '>=': new Date() },
  }).then((token) => {
    if(!token) {
      return res.unauthorized();
    }

    return next();
  }).catch((err) => {
    res.serverError(err);
  });
};
