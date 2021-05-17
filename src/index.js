import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './Contexts/products_context';
import { FilterProvider } from "./Contexts/filter_context";
import {CartProvider} from "./Contexts/cart_context"

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <React.StrictMode>
         <App />
        </React.StrictMode> 
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById('root')
);

