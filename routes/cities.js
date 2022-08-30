var express = require('express');
var router = express.Router();
const {create} = require('../controllers/citiesController.js')
/* GET users listing. */

router.post('/', function(req, res, next) {
    create;
  });

module.exports = router;