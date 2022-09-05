var express = require('express');
var router = express.Router();
const {create, update, read, destroy, itineraries } = require('../controllers/itineraryController.js')

router.get('/', itineraries)

router.post('/',create);

router.patch('/:id', update);

router.get('/:id', read);

router.delete('/:id', destroy)


module.exports = router;