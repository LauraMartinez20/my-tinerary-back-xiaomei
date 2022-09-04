var express = require('express');
var router = express.Router();
const {create, read } = require('../controllers/userController.js')

router.post('/',create);

router.get('/:id', read);

module.exports = router;