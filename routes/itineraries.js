var express = require('express');
var router = express.Router();
const {create, update, read, destroy, itineraries, likes } = require('../controllers/itineraryController.js')

router.get('/', itineraries)

router.post('/',create);

router.patch('/:id', update);

router.get('/:id', read);

router.delete('/:id', destroy)

router.patch('/like/:id', passport.authenticate('jwt', {session:false}), likes)


module.exports = router;