var express = require('express');
var router = express.Router();
const {create, update, read, destroy  } = require('../controllers/itineraryController.js')


router.post('/',create);

router.patch('/:id', update);

router.get('/:id', read);

router.delete('/:id', destroy)

module.exports = router;