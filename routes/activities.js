var express = require('express');
var router = express.Router();
const {create, read, itinerary } = require('../controllers/activityController.js')

router.get('/', itinerary);

router.post('/',create);

router.get('/:id', read);



module.exports = router;