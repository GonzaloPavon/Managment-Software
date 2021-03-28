//Dependecias
const { Router  } = require('express');

const router  = Router();

//Importacion de controllers
const { getProducts,  createProduct,  getProduct, getProductByBarcode, updateProduct,  deleteProduct}  = require('../Controllers/productController');

//Rutas
router.route('/')
  .get(getProducts)
  .post(createProduct)

router.route('/id/:id')
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct)

router.route('/barcode/')
  .post(getProductByBarcode)

//Exportacion
module.exports  = router;
