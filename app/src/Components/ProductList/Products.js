import  { API } from  '../../config.js';
import React, { Component } from 'react';
import axios from 'axios';
import  { NavLink } from 'react-router-dom';
import { ReactComponent as Delete } from  '../../Icons/Delete.svg';
import { ReactComponent as Edit } from  '../../Icons/Edit.svg';

class Products extends Component {

  deleteProduct = async (productId)  =>  {
    await axios.delete(`${API}/products/id/` + productId);
    window.location.href = '/products';
  }

  render(){
    const products  = this.props.products;
    const loading = this.props.loading;
    if(loading) {
      return(
        <div  className="PLTable">
          <h4>Cargando...</h4>
        </div>
      )
    }
    else{
      return(
          <table  className="PLTable">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Marca</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
                {products.map(product =>  {
                  return(
                    <tr key={product._id}>
                      <td>{product.productName}</td>
                      <td>{product.brand}</td>
                      <td>{product.price}$</td>
                      <td>{product.quantity}</td>
                      <td><NavLink to={"/edit/" + product._id}  ><button className="ButtonIcon"><Edit/></button></NavLink></td>
                      <td><button onClick={() => this.deleteProduct(product._id)} className="ButtonIcon"><Delete/></button></td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
      )
    }
  }
}

export default Products;
