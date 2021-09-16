var express = require('express');
const session = require('express-session');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.session.userlogin);
  if (req.session.userlogin)
    res.render('home', { title: 'Home', name: req.session.name.toUpperCase(), items: [{ id: 1, title: 'IPHONE 12' }, { id: 2, title: 'SAMSUNG S20 PLUS' }, { id: 3, title: 'MOTO G60' }, { id: 4, title: 'OPPO A74' }] });
  else
    res.redirect('/')
});

router.post('/logout', function (req, res, next) {
  req.session.userlogin = false
  res.redirect('/')

})

module.exports = router;
