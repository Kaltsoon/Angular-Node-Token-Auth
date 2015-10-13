var express = require('express');
var router = express.Router();
var Auth = require('../app/services/auth');
var UserController = require('../app/controllers/userController');

router.post('/authenticate', UserController.authenticate);
router.get('/', UserController.index);
router.get('/logged-in', Auth.verifyAuthentication, UserController.loggedIn);
router.get('/:id', Auth.verifyAuthentication, Auth.verifyIsSignedInUser, UserController.show)

module.exports = router;
