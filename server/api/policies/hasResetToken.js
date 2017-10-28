/**
 * hasResetToken policy
 **/

module.exports = (req, res, next) => {
  const params = req.allParams();
  if(!params.token || params.token.type !== 'reset' || params.user.email == null){
    return res.unauthorized();
  }

  User.findOne({
    email: params.user.email,
  }).then((user) => {
    if(!user) {
      return res.unauthorized();
    }

    Token.findOne({
      type: params.token.type,
      user: user.id,
      expiresAt: { '>=': new Date() },
    }).then((token) => {
      if (!token) {
        return res.unauthorized();
      }

      return next();
    }).catch((err) => {
      return res.serverError(err);
    });


  }).catch((err) =>{
    return res.serverError(err);
  });
};
