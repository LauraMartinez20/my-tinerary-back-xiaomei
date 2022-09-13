var express = require('express'); //porque usamos métodos de express como el express.router, .get, .post y demás
var router = express.Router(); //objeto que se le agrega un método .post para que controle el controlador
const {create, read, all, update, destroy } = require('../controllers/citiesController.js')

/* GET users listing. */

router.post('/',create);

  router.get('/', all);

  router.get('/:id', read);

  router.patch('/:id', update)

  router.delete('/:id', destroy)



module.exports = router;