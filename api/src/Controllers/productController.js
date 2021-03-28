//Constantes
const productCtrl = {};
const Product = require('../Models/productModel');

//Metodos
productCtrl.getProducts = async(req,  res)  =>  {
  const products  = await Product.find();
  res.json(products);
}
productCtrl.createProduct = async(req,  res)  =>  {
  const newProduct  = new Product(req.body);
  const existentProduct = await Product.findOne({barcode: req.body.barcode})
  if(existentProduct){
    res.send('Ya existe un producto con ese codigo de barra')
  }
  else{
    await newProduct.save();
    res.json('Producto agregado con exito');
  }
}
productCtrl.getProduct  = async(req,  res)  =>  {
  const product = await Product.findById(req.params.id);
  res.json(product);
}
productCtrl.getProductByBarcode  = async(req,  res)  =>  {
  const product = await Product.findOne({barcode: req.body.barcode})
  if (product) {
    res.json(product);
  }
  else {
    return  res.send('No se encontró el producto');
  }
}
productCtrl.updateProduct = async(req,  res)  =>  {
  await Product.findByIdAndUpdate(req.params.id,  req.body);
  res.json('Producto actualizado con exito')
}
productCtrl.deleteProduct = async(req,  res)  =>  {
  await Product.findByIdAndDelete(req.params.id)
  res.json('Producto eliminado con exito');
}

//Exportacion
module.exports  = productCtrl;
