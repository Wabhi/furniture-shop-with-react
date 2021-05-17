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
  

   //SIDEBAR>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
   const products_reducer = (state, action) => {
    //checking action for sidebar open then perform operartion on it......
    if (action.type === SIDEBAR_OPEN) {
        return {...state,isSidebarOpen:true}
        //console.log(action)
    }
    //checking action for sidebar close then perform operartion on it......
    if (action.type === SIDEBAR_CLOSE) {
        return {...state,isSidebarOpen:false}
        //console.log(action)
    }
    
     
    //ALL PRODUCTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //chicking for product is going to load or not.....................
    if (action.type === GET_PRODUCTS_BEGIN) {
        return {...state,productsLoading:true}
    }
    //Checking for when product is load ,is it going to grab all prodcuts in products array and also for featuredProduct when featured property ture.
    if (action.type === GET_PRODUCTS_SUCCESS) {
      const featuredProducts = action.payload.filter((product) => product.featured === true)
      return {
      ...state,
      productsLoading: false,
      products: action.payload,
      featuredProducts
     }
    }
    //if any this wrong happend while feching data then error action shoult be perform...........
    if (action.type === GET_PRODUCTS_ERROR) {
      return { ...state, productsLoading:false, productsError: true }
    }
    
    
    //SINGLEPRODUCT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //if the loading a single product may be loading is going to fail are may be the product is going to failed.......
    if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
      return {...state,sigleProductLoading: true,sigleProductError: false}   
    }
    //checking the when product is loaing is done then set product to in a object...........
    if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
        return {...state,sigleProductLoading:false,sigleProduct:action.payload}    
    }
    //this is for error ,may be error getting after loading done ,you fetch error cause of product.........
    if (action.type === GET_SINGLE_PRODUCT_ERROR) {
      return {...state,sigleProductLoading:false,sigleProductError:true}
    }
    return state
    throw new Error(`No Matching "${action.type}" - action type`)
  }
export default products_reducer