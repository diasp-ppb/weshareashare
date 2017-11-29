/**
 * hasOAuthBearer policy
 */

const passport = require('passport');

module.exports = (req, res, next) => {
  const userReq = Object.assign({}, req);
  delete userReq.query.accessToken;
  return passport.authenticate('bearer', (err, user) => {
    if (err) {
      return res.serverError(err);
    } else if (!user) {
      return res.unauthorized();
    }
    userReq.query.accessUser = user;
    return next();
  })(userReq, res);
};
