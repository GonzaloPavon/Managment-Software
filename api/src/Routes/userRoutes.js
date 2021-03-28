//Dependecias
const { Router  } = require('express');

const router  = Router();

//Importacion de controllers
const { getUsers,  createUser,  getUser, updateUser,  deleteUser}  = require('../Controllers/userController');
const { signin,  signout }  = require('../Controllers/authController');

//Rutas
router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)

//Rutas de autenticacion
router.route('/signin')
  .post(signin)

router.route('/signout')
  .post(signout)

//Exportacion
module.exports  = router;
