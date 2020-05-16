import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Register from './Containers/User/Register/Register';
import Login from './Containers/User/Login/login';
import Footer from './Components/Footer/footer'
import Home from './Containers/Home/Home';
import Redes from './Components/RedesSociales/redes';
import Carrito from './Containers/Carrito/Carrito';
import ProductDetail from './Containers/ProductDetail/ProductDetail.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
         <Route path="/" component={Home} exact/> 
          <Route path="/register" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/product/:_id" component={ProductDetail} exact/>
          <Route path="/carrito" component={Carrito} exact/>
        </Switch>
      <Redes/>
      </BrowserRouter>
      <Footer/>
      
    
    </div>
  );
}

export default App;