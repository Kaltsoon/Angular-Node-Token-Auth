var User = require('../models/user');
var Auth = require('../services/auth')

function authenticate(req, res, next){
  var userData = req.body;

  if(!userData || !userData.email || !userData.password){
    res.status(403).json({ message: 'NO_EMAIL_OR_PASSWORD_PROVIDED' });
    return;
  }

  User.findOne({ email: userData.email })
    .then(user => {
      if(user && user.password == userData.password){
        res.json({
          user: user,
          token: Auth.createTokenForUser({ id: user._id })
        });
      }else{
        res.status(403).json({ message: 'WRONG_EMAIL_OR_PASSWORD' });
      }
    });
}

function index(req, res, next){
  User.find()
    .then(users => res.json(users));
}

function loggedIn(req, res, next){
  User.findOne({ _id: req.decodedToken.id })
    .then(user => res.json(user));
}

function show(req, res, next){
  User.findOne({ _id: req.params.id })
    .then(user => res.json(user));
}

module.exports = { authenticate, index, loggedIn, show };
