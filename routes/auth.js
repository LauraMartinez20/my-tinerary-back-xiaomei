var express = require('express');
var router = express.Router();
const {signUp, verifyMail, signIn, signOut } = require('../controllers/userController.js')

router.post('/signup',signUp);
router.post('/signin',signIn);
router.post('/signOut',signOut);
router.get('/verify:code',verifyMail) //property is changed but needs to be read first


module.exports = router;