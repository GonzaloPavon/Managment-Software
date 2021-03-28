import React, { Component} from 'react';
import  { NavLink } from 'react-router-dom';

class MobileNav  extends Component{
  render(){
    if (this.props.estado === true){
    return (
      <div  className="NavbarLiListM">
        <li className="NavbarLiM"><NavLink to="/addproduct" className='NavbarNavLinkM'  onClick={this.props.cambiarEstado}>Agregar Producto</NavLink></li>
        <li className="NavbarLiM"><NavLink to="/products" className='NavbarNavLinkM'  onClick={this.props.cambiarEstado}>Productos</NavLink></li>
        <li className="NavbarLiM"><NavLink to="/calculate" className='NavbarNavLinkM'  onClick={this.props.cambiarEstado}>Calcular</NavLink></li>
      </div>
    )
  }
    else {
      return (null)
    }
  }
}

export default MobileNav;
