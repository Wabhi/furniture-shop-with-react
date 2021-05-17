import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../Reducers/products_reducer'
import { products_url as url } from '../Utils/Constant'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

//Here i set all the initial state which is suppose to perform later for allProducts and as well as singleProduct.........
const initialState = {
  //these state are for all products................
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  //these state are for single product................
  sigleProductLoading: false,
  sigleProductError: false,
  sigleProduct:{}
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
    //this is my reducer I will perform any operartion based on action from here.......................
    const [state, dispatch] = useReducer(reducer, initialState)
    
    
    //for opening sideBar.............
    const OpenSidebar = () => {
        dispatch({type:SIDEBAR_OPEN})
  }
  
    //for closing sideBar.............
    const CloseSidebar = () => {
        dispatch({type:SIDEBAR_CLOSE})
  }
     //Fetching the all products from api .............
    const fetchProducts = async (url) => {
        dispatch({ type: GET_PRODUCTS_BEGIN }) //this is for when prodcuts is going to load..
        try {
          const response = await axios.get(`${url}`)
          const products = response.data
          //console.log(response.data)
          dispatch({type:GET_PRODUCTS_SUCCESS,payload:products})
        } catch (error) {
            dispatch({type:GET_PRODUCTS_ERROR})  //when any this wrong happened while fetching data...
        }
  }
      //Fetching a single product from api................
    const fetchSingleProduct = async (url) => {
      dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
      try {
          const response = await axios.get(`${url}`)
          const product = response.data
          //console.log(product)
          dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:product})
      } catch (error) {
           dispatch({type:GET_SINGLE_PRODUCT_ERROR})
      }
        
  }
  useEffect(() => {
    fetchProducts(url)  //I called my fetchProducts() function inside useefffect,because there are many reasons to do that but
  },[])                 //But i want the all product and display when my all components is ready ,that mean is mounted.

  return (
    <ProductsContext.Provider value={{...state,OpenSidebar,CloseSidebar,fetchSingleProduct}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}