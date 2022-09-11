var express = require('express');
var router = express.Router();
const {signUp, verifyMail, signIn, signOut } = require('../controllers/userController.js')

router.post('/signup',signUp);



module.exports = router;