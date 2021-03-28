//Componente Principal
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Estilos
import './App.css';
import  './Styles/CssMaster.css';
import './Icons/icons.css'

//Componentes importados
import Navigation from './Components/Navigation/DeskNav'
import Home from './Components/Home'
import ProductManagment from './Components/ProductManagment/ProductManagment'
import ProductList from './Components/ProductList/ProductList'
import Calculate from './Components/Calculate/Calculate'
import Footer from './Components/Footer'

//Componente
class App extends Component{
  render(){
    return(
      <Router>
        <Navigation/>
        <div  className='AppRoutes'>
          <Route  path='/'  exact component={Home}/>
          <Route  path='/addproduct'  component={ProductManagment}/>
          <Route  path='/edit/:id'  component={ProductManagment}/>
          <Route  path='/products'  component={ProductList}/>
          <Route  path='/calculate'  component={Calculate}/>
        </div>
        <Footer />
      </Router>
    )
  }
}

//Exportacion del componente
export default App;
