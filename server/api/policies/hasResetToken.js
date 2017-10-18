/**
 * hasResetToken policy
 **/

module.exports = (req, res, next) => {
  const params = req.allParams();
  if(!params.token || params.token.type !== 'reset' || params.user.email == null){
    return res.unauthorized();
  }

  Users.findOne({
    email: params.user.email,
  }, (err, user) => {
    if(err) {
      return res.negotiate(err);
    } else if (!user) {
      return res.unauthorized();
    }

    Tokens.findOne({
      type: params.token.type,
      user: user.id,
      expiresAt: { '>=': new Date() },
    }, (err, token) => {
      if(err) {
        return res.negotiate(err);
      } else if (!token) {
        return res.unauthorized();
      }

      return next();
    });

  });
};
