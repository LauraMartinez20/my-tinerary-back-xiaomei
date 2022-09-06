var express = require('express');
var router = express.Router();
const {create, read, itineraries } = require('../controllers/activityController.js')

router.get('/', itineraries);

router.post('/',create);

router.get('/:id', read);



module.exports = router;