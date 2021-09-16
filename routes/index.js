var express = require('express');
const session = require('express-session');
const app = require('../app');
var router = express.Router();
var users = require('../public/javascripts/data')

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.query.submit == 'false') { return res.render('index', { message: 'Invalid credentials' }) }
  if (req.session.userlogin) { return res.redirect('/home') }
  res.render('index', { title: 'Log In' });
});


router.post('/home', (req, res) => {
  const { name, password } = req.body;
  let userMatch = users.find(user => user.name == name && user.password == password);
  if (userMatch) {
    req.session.userlogin = true
    req.session.name = name
    res.redirect('/home');
  }
  else {
    res.redirect('/?submit=false')
  }
})
module.exports = router;
