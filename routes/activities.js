var express = require('express');
var router = express.Router();
const {create, read } = require('../controllers/activityController.js')

router.post('/',create);

router.get('/:id', read);

module.exports = router;