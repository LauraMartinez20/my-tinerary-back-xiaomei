var express = require('express');
var router = express.Router();
const {create, read, all, update, destroy } = require('../controllers/citiesController.js')

/* GET users listing. */

router.post('/',create);

  router.get('/', all);

  router.get('/:id', read);

  router.put('/:id', update)

  router.delete('/:id', destroy)



module.exports = router;