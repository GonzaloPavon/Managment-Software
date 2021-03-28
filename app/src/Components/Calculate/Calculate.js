import  { API } from  '../../config.js';
import React, { useState  } from 'react';
import axios from 'axios';

const Calculate = () => {
  const [products, setProducts] = useState([]);
  const [selledQuantity, setSelledQuantity] = useState(1);
  const [barcode, setBarcode] = useState('');
  const [category, setCategory] = useState('');
  const [anotherPrice, setAnotherPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const onSubmit  = async (e) =>  {
    e.preventDefault();
    const res = await axios.post(`${API}/products/barcode`,  barcode)
    if(res.data.barcode){
      const currentQuantity  = (res.data.quantity=selledQuantity);
      const currentPrice  = (res.data.price=currentQuantity*res.data.price);
      setProducts([...products, res.data])
      setTotalPrice(totalPrice+currentPrice)
    }
    else {
      console.log('No se encontró el producto');
    }
  }
  const onSubmitAnotherProduct  = (e) =>  {
    e.preventDefault();
    const extraProduct  =  {productName: category.category, price:  anotherPrice.anotherPrice, quantity: 1};
    const currentPrice  = (extraProduct.price=extraProduct.quantity*extraProduct.price);
    setProducts([...products, extraProduct])
    setTotalPrice(totalPrice+currentPrice)
  }
  const quantityChange = (e)  => {
    setSelledQuantity(e.target.value);
  }
  const deleteProduct = (index, currentProductPrice) =>  {
    setProducts(currentProduct => currentProduct.filter((products, i) => i !== index));
    setTotalPrice(totalPrice-currentProductPrice)
  };
  const onInputChange = (set, field, value) => {
    set({[field]: value});
  };
  return(
    <div  className="CalculateScreen">
      <div  className="CalculateCard">
        <div  className="CalculateContainer">
          <h1 className="CalculateTitle">Calcular</h1>
          <div  className="CalculateForms">
            <form onSubmit={onSubmit}  className="CalculateForm">
              <div>Codigo de barra</div><div>Cantidad</div>
              <input  type="text"
                      placeholder="Codigo de barras"
                      onChange={event => onInputChange(setBarcode, "barcode", event.target.value)}/>

              <input  type="number"
                      placeholder="Cantidad"
                      onChange={quantityChange}
                      name="selledQuantity"
                      value={selledQuantity}  className="CalculateQuantity"/>
              <button>Enviar</button>
            </form>
            <form  onSubmit={onSubmitAnotherProduct} className="CalculateForm">
              <div>Categoria</div><div>Precio</div>
              <select onChange={event => onInputChange(setCategory, "category", event.target.value)}>
                <option>Carniceria</option>
                <option>Verduleria</option>
                <option>Otros</option>
              </select>
              <input  type="number"
                      placeholder="Precio"
                      onChange={event => onInputChange(setAnotherPrice, "anotherPrice", event.target.value)}
                      required/>
              <button>Enviar</button>
            </form>
          </div>
          <div  className="Productos">
            <table  className="CalculateTable">
              <thead>
                <tr>
                  <th>Cantidad</th>
                  <th>Producto</th>
                  <th>c/u</th>
                  <th>Total</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                { products.map( (product,  index) =>  {
                  var currentProductPrice = product.price;
                  return(
                        <tr key={index}>
                          <td>{product.quantity}</td>
                          <td>{product.productName} {product.brand}</td>
                          <td>{product.price/product.quantity}$</td>
                          <td>{product.price}$</td>
                          <td><button onClick={ () => deleteProduct(index,  currentProductPrice)}>Eliminar</button></td>
                        </tr>
                        )
                  })
                }
              </tbody>
            </table>
          </div>
          <div  className="CalculateTotal">
            Total de la compra : {totalPrice}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Calculate;
