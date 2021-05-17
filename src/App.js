import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {NavBar,Sidebar,Footers} from "./Components"
import { Home, SingleProduct, PrivateRout, About, Error, CheckOut, Product, Cart,Login,Signin } from "./Pages"
function App() {
  //setting routing between component to component...............................
  return (
    <Router>
      <NavBar />
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/cart" exact>
          <Cart/>
        </Route>
        <Route path="/products" exact>
          <Product/>
        </Route>
        <Route path="/product/:id" children={<SingleProduct/>}/>
        <Route path="/checkout" exact>
          <CheckOut/>    
        </Route>
        <Route path="/login" exact>
           <Login/>
        </Route>
        <Route path="/signup" exact>
           <Signin/>
        </Route>
        <Route path="*">
             <Error/> 
        </Route>
      </Switch>
      <Footers/>
    </Router>
  );
}

export default App;
