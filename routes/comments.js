var express = require('express');
var router = express.Router();
let passport = require('../config/passport')
const {create, read, destroy, updateComment  } = require('../controllers/commentController.js')

router.post('/',create);

router.patch('/:id', passport.authenticate('jwt', {session:false}), updateComment )

router.get('/:id', read);

router.delete('/:id', destroy);



module.exports = router;