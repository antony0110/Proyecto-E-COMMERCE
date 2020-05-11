import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Register from './Containers/User/Register/Register';
import Login from './Containers/User/Login/login';
import Footer from './Components/Footer/footer'
//import ProductDetail from './containers/ProductDetail/ProductDetailFuncional';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/register" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
        </Switch>
      </BrowserRouter>
      <Footer/>
      
    
    </div>
  );
}

export default App;