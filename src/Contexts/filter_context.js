import React, { useContext, useEffect, useReducer } from "react"
import reducer from "../Reducers/filter_reducer"
import {
    LOAD_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS
} from "../actions"
import { useProductsContext } from "../Contexts/products_context"

const initialState = {
    filterProducts: [],        //this is for when filter value change filter product should be there.
    allProducts:[],             //this is for when we clear filter whatever we provide,that time all products should be there.
    gridView:true,            //this is for grid view,with the help of this we can toggle between list to grid view vice verca......
    sortByValue:"price-lowest" ,  //this is for sortByvalue by default i have taken price lowest state value..
    filter: {
        text: '',
        company: "all",
        category: "all",
        color: "all",
        minPrice: 0,
        maxPrice: 0,
        price:0,
        shipping:false
    }
}
const FilterContext = React.createContext()
export const FilterProvider = ({ children }) => {

    //here i just grab the all products from my product context which is already got all products
    const { products } = useProductsContext()
    //console.log(products)

    const [state, dispatch] = useReducer(reducer, initialState)
    //we can not pass all the products which we got from product context directly into initial state,so we will use useeffect
    //and one thing more initialy our products array is empty but after mount we want to get it therefor i used products as dependency
    //of array.and dispatch an action which is handle to laod the products.
    useEffect(() => {
        dispatch({type:LOAD_PRODUCTS,payload:products})
    },[products])
     
    //This functions are for grid and list view...................................
    const setGridView = () => {
        dispatch({type:SET_GRIDVIEW})
    }
    const setListView = () => {
        dispatch({type:SET_LISTVIEW})
    }

    //This function is for sort the product based on input/selected value...........
    const sortByTheValue = (e) => {
        //const name = e.target.name
        const value = e.target.value
        //console.log(name,value)
        dispatch({type:UPDATE_SORT,payload:value})
    }

    //here i used another useEffect for when we sort the product by its value then according to that my useEffect run 
    //and also we get all the product which is previously empty,there for in dependecy array i put both as dependency.and dispatch an action.
    useEffect(() => {
        dispatch({type:FILTER_PRODUCTS})  //also for filter object/text,price,category,min-price,maxprice etc.
        dispatch({type:SORT_PRODUCTS})
    }, [products, state.sortByValue,state.filter])
    
    //Filter by search input text......................
    const filterByText = (e) => {
        let name = e.target.name
        let value = e.target.value
        //console.log(name,value)
        //dispatched an action to hanlde input text/search/company/category and by passing name and value as payload.
        if (name === "category") {
            value = e.target.textContent
        }
        dispatch({type:UPDATE_FILTERS,payload:{name,value}})
    }
    //clear the filter.....................
    const clearFilter = () => {
        dispatch({type:CLEAR_FILTERS})
    }

    return (
        <FilterContext.Provider value={{...state,setGridView,setListView,sortByTheValue,filterByText ,clearFilter}}>
            {children}
        </FilterContext.Provider>
    )
}
export const useFilterContext = () => {
    return useContext(FilterContext)
  }