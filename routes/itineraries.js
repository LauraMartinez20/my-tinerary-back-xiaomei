var express = require('express');
var router = express.Router();
const {create, update, destroy } = require('../controllers/itineraryController.js')


router.post('/',create);

router.patch('/:id', update)

router.delete('/:id', destroy)

module.exports = router;