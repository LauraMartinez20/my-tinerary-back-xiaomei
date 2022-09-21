var express = require('express');
var router = express.Router();
let passport = require('../config/passport')
const {create, update, read, destroy, itineraries, likes, dislikeLike } = require('../controllers/itineraryController.js')

router.get('/', itineraries)

router.post('/',create);

router.patch('/:id', update);

router.get('/:id', read);

router.delete('/:id', destroy)

//router.patch ('/likes', passport.authenticate('jwt', {session:false}), dislikeLike)

router.patch('/like/:id', passport.authenticate('jwt', {session:false}), likes)


module.exports = router;