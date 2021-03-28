//Dependecias
const { Schema, model } = require('mongoose');

//Schema
const productSchema = new Schema  (
  {
    barcode:  { type: String, required: true, unique:true},
    productName:  { type: String, required: true},
    brand:  String,
    price:  { type: Number, required: true},
    quantity:  Number
  },
  {timestamps: true}
);

//Exportacion
module.exports  = model('Product', productSchema);
