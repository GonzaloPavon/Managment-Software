import  { API } from  '../../config.js';
import React, { Component} from 'react';
import axios from 'axios'

import PMForm from  './PMForm';

class ProductManagment extends Component{
  state = {
    barcode:  '',
    productName:'',
    brand:'',
    price: 0,
    quantity: 0,
    editing:false,
    _id:'',
    titleCard:''
  }
  async componentDidMount(){
    if(this.props.match.params.id){
      console.log(this.props.match.params.id);
      const res = await axios.get(`${API}/products/id/` + this.props.match.params.id);
      console.log(res.data)
      this.setState({
        barcode:  res.data.barcode,
        productName:  res.data.productName,
        brand:  res.data.brand,
        price:  res.data.price,
        quantity: res.data.quantity,
        editing:true,
        _id:  res.data._id,
        titleCard:'Editando:  '+res.data.productName +' '+res.data.brand
      });
    }else{this.setState({titleCard:'Agregar Producto'})}
  }
  onSubmit  = async (e) =>{
    e.preventDefault();
    if(this.state.editing)  {
      const updatedProduct  = {
        barcode:  this.state.barcode,
        productName:  this.state.productName,
        brand:  this.state.brand,
        price:  this.state.price,
        quantity: this.state.quantity
      }
      await axios.put(`${API}/products/id/` + this.state._id, updatedProduct);
      window.alert('Producto editado con exito');
    } else {
      const newProduct  = {
        barcode:  this.state.barcode,
        productName:  this.state.productName,
        brand:  this.state.brand,
        price:  this.state.price,
        quantity: this.state.quantity
      };
      await axios.post(`${API}/products/`, newProduct);
      window.alert('Producto agregado con exito');
    }
    window.location.href = '/products';
  }
  onInputChange = (e)  =>{
    this.setState({[e.target.name]: e.target.value})
  }
  render(){
    return(
      <PMForm titleCard={this.state.titleCard}
              onSubmit={this.onSubmit}
              onInputChange={this.onInputChange}
              barcode={this.state.barcode}
              productName={this.state.productName}
              brand={this.state.brand}
              price={this.state.price}
              quantity={this.state.quantity}/>
    )
  }
}
export default ProductManagment;
