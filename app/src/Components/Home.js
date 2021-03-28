import React, { Component} from 'react';
import  { NavLink } from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div  className="HomeScreen">
        <div  className="HomeCard">
          <div  className="HomeContainer">
            <div  className="HomeTitle">
              <h1>Bienvenid@</h1>
            </div>
            <div  className="HomeBody">
              <label>¿Desea actualizar los precios?</label>
              <NavLink  to="/products" className="HomeNavLink">Buscar productos</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
