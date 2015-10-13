var jwt = require('jsonwebtoken');

var JWT_SECRET = 'lk7IqejFTEqaIep8guBE16Mg5JWpZtHj';

function createTokenForUser(user){
  return jwt.sign(user, JWT_SECRET, {
    expiresInMinutes: 1440
  });
}

function verifyAuthentication(req, res, next){
  var bearerHeader = req.headers['authorization'];

  if(!bearerHeader){
    res.status(403).json({ message: 'NO_TOKEN_PROVIDED' });
    return;
  }

  var bearer = bearerHeader.split(' ');
  var bearerToken = bearer[1];

  jwt.verify(bearerToken, JWT_SECRET, function(err, decoded) {
    if (err) {
      res.status(403).json({ message: 'INVALID_TOKEN' });
    } else {
      req.decodedToken = decoded;
      next();
    }
  });
}

function verifyIsSignedInUser(req, res, next){
  var tokenUserId = req.decodedToken.id;

  if(tokenUserId == req.params.id){
    next();
  }else{
    res.status(403).json({ message: 'NOT_SIGNED_IN_USER' });
  }
}

module.exports = { createTokenForUser, verifyAuthentication, verifyIsSignedInUser };
