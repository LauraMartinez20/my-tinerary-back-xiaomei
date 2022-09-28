var express = require('express');
var router = express.Router();
let passport = require('../config/passport')
const {create, read, destroy, updateComment, deleteComment, createComment, commentaries  } = require('../controllers/commentController.js')


router.post('/', passport.authenticate('jwt', {session:false}), createComment )

//router.post('/',create);

router.get('/',commentaries);

//router.get('/:id', read);

router.patch('/:id', passport.authenticate('jwt', {session:false}), updateComment )

router.delete('/:id', passport.authenticate('jwt', {session:false}), deleteComment )

router.delete('/:id', destroy);





module.exports = router;