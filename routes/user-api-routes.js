
const db = require('../models')
require('dotenv').config()
const passport = require('../config/passport')

module.exports = function (app) {
  // app.post for login
  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    // console.log("req user in user api routes", req.user)
    res.json(req.user)
  })

  // app.post for signup
  app.post('/api/signup', function (req, res) {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      // console.log("got here 1")
      res.redirect(307, '/api/login')
    })
      .catch(function (err) {
        res.status(401).json(err)
      })
  })

  // app.get for logout
  app.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  // Route for getting some data about our user to be used client side
  app.get('/api/user_data', function (req, res) {
    if (!req.user) {
      res.json({})
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      })
    }
  })
}
