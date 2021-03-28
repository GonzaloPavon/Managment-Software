import React, { Component} from 'react';
import  { NavLink } from 'react-router-dom';
import MobileNav from './MobileNav';

class Navigation  extends Component{

  state =  {
    mostrar:false
  }
  cambiarEstado = ()  =>{
    this.setState({mostrar:!this.state.mostrar})
  }
  render(){
    return(
      <div  className="Navbar">
        <ul className="NavbarUlE">
          <div className="NavbarLogoE"><NavLink exact to="/" className='NavbarNavLinkLogoE'>Inicio</NavLink></div>
          <div  className="NavbarLiListE">
            <li className="NavbarLiE"><NavLink to="/addproduct" className='NavbarNavLinkE'>Agregar Producto</NavLink></li>
            <li className="NavbarLiE"><NavLink to="/products" className='NavbarNavLinkE'>Productos</NavLink></li>
            <li className="NavbarLiE"><NavLink to="/calculate" className='NavbarNavLinkE'>Calcular</NavLink></li>
          </div>
        </ul>
        <ul className="NavbarUlM">
          <div  className="NavbarMenuM">
            <li className="NavbarLogoM"><NavLink  exact to="/"  className='NavbarNavLinkM'>Inicio</NavLink></li>
            <div  className="NavbarBotonM"><button className="iconMenu" onClick={this.cambiarEstado}></button></div>
          </div>
          <MobileNav estado={this.state.mostrar}  cambiarEstado={this.cambiarEstado}/>
        </ul>
      </div>
    )
  }
}

export default Navigation;
