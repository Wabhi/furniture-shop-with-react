import {
    LOAD_PRODUCTS,
    SET_LISTVIEW,
    SET_GRIDVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
  } from '../actions'
  
const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
      //here i used spread operator for both filterProducts and as wel as for allProducts becuase I want to set whatever
      //products i get from payload i want to set them for both if i need to reset my fiter fuctionality then there
      //should be something where i can apply it again,so i just copied all product using spread operator to get all the 
      //after reset and i could be able to perform filter action also on it.
      return {...state,allProducts:[...action.payload],filterProducts:[...action.payload]}
  }

  //this is for Grid/List view toggle.....
  if (action.type === SET_GRIDVIEW) {
    return {...state,gridView:true}
  }
  if (action.type === SET_LISTVIEW) {
    return {...state,gridView:false}
  }

  //This is for update the products by sortByValue..................
  if (action.type === UPDATE_SORT) {
    return {...state,sortByValue:action.payload}
  }

  //this is for sort the product by it value and perform the action according to that,and one thing i keep an array which is 
  //initialy empty but when you perform the action according  to sortByValue that it will be fill with some products.
  if (action.type === SORT_PRODUCTS) {
    const { filterProducts, sortByValue } = state
    let tempArray = [...filterProducts]    //in case if your value not match then by default it will show the previous one
    if (sortByValue === "price-lowest") {
        //sort by lowest price to heighest...
        //console.log("price-lowest")
      tempArray = tempArray.sort((a, b) => a.price - b.price)
    }
    if (sortByValue === "price-highest") {
      //sort by heightest price to lowest price...
      //console.log("price-highest")
      tempArray = tempArray.sort((a,b)=>b.price-a.price)
    }
    if (sortByValue === "name-a") {
      //sort by a-z nameing convention...
      //console.log("name-a")
      tempArray = tempArray.sort((a,b)=>a.name.localeCompare(b.name))
    }
    if (sortByValue === "name-z") {
      //sort by z-a nameing convention...
      //console.log("name-z")
      tempArray = tempArray.sort((a,b)=>b.name.localeCompare(a.name))
    }
    return {...state,filterProducts:tempArray}
  }
  
  //this is for sort the product based on name/input search filed...........
  if (action.type === UPDATE_FILTERS) {
    //console.log('lllll')
    const { name, value } = action.payload
    //console.log(name,value)
    return {...state,filter:{...state.filter,[name]:value}}
  }
  if (action.type === FILTER_PRODUCTS) {
    //console.log('filter the project based on search!')
    //here i first copy all the the product in tempproduct because we want to do some filtering therefor we should have 
    //our intial state value,if i try with filter product,nothing gonna happen.it will throws some error.
    const { allProducts } = state
    const {text,company,category} = state.filter //to filter out based on the filter object
    let tempProduct = [...allProducts]

    //text
    if (text) {
      tempProduct = tempProduct.filter((product) => {
          return product.name.toLowerCase().startsWith(text)
        })
    }
    //category
    if (category !== "all") {
      tempProduct = tempProduct.filter((product) => {
        return product.category === category
      })
    }
    //company
    if (company !== "all") {
      tempProduct = tempProduct.filter((product) => {
        return product.company === company 
      })
    }
    return {...state,filterProducts:tempProduct}
  }

  //clear the filter................
  //for that I puted all the state as it is.which are in filter_context 
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filter: {
        text: '',
        company: "all",
        category: "all",
    }
    }
  }
    throw new Error(`No Matching "${action.type}" - action type`)
  }
export default filter_reducer