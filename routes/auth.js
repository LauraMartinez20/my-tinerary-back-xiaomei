var express = require('express');
var router = express.Router();
let passport = require('../config/passport')
const {signUp, verifyMail, signIn, signOut, verifyToken} = require('../controllers/userController.js')

router.post('/signup',signUp);

router.post('/signin',signIn);

router.get('/token', passport.authenticate('jwt', {session:false}), verifyToken)

router.post('/signout',signOut);

router.get('/verify:code',verifyMail) //property is changed but needs to be read first


module.exports = router;