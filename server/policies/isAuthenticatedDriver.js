const passport = require('passport')
const AppConstant = require('../app.constant')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (err, user, role) {
    if (err || !user || role !== AppConstant.ROLE.DRIVER) {
      res.status(403).send({
        error: 'You do not have access to this resource'
      })
    } else {
      req.user = user
      next()
    }
  })(req, res, next)
}
