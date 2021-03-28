import React, { Component} from 'react';

class PMForm extends Component{
  render(){
    return(
      <div className="HomeScreen">
        <div  className="HomeCard">
          <div  className="HomeContainer">
            <div  className="PMTitle"><h4>{this.props.titleCard}</h4></div>
            <form onSubmit={this.props.onSubmit}  className="PMForm">
              <div>
                Codigo de barra
                <input  type="text"
                        placeholder="Codigo de barras"
                        onChange={this.props.onInputChange}
                        name="barcode"
                        value={this.props.barcode}
                        required/>
              </div>
              <div>
                Nombre
                <input  type="text"
                        placeholder="Nombre del producto"
                        onChange={this.props.onInputChange}
                        name="productName"
                        value={this.props.productName}
                        required/>
              </div>
              <div>
                Marca
                <input  type="text"
                        placeholder="Marca del producto"
                        onChange={this.props.onInputChange}
                        name="brand"
                        value={this.props.brand}
                        required/>
              </div>
              <div>
                Precio
                <input  type="number"
                        placeholder="Precio"
                        onChange={this.props.onInputChange}
                        name="price"
                        value={this.props.price}
                        required/>
              </div>
              <div>
                Cantidad
                <input  type="number"
                        placeholder="Cantidad"
                        onChange={this.props.onInputChange}
                        name="quantity"
                        value={this.props.quantity}
                        required/>
              </div>
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default PMForm;
