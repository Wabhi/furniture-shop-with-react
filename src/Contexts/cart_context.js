import React, {useContext, useEffect, useReducer } from "react"
import reducer from "../Reducers/cart_reducer"
import { ADD_TO_CART, CLEAR_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, COUNT_CART_TOTALS } from "../actions"


//to persising the data when we referesh the page it goes to empty but we don't want to da that if any thing added to the
//cart it should be there ,when you referesh it ,thats why I make a fucntion to check first is cart empty and also anything
//in local storage with name of cart key or somthing
//is already there if is empty the return empy i not empty then first grab that and check with same name.

const getCartData = () => {
    let cart = localStorage.getItem('cart')
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

const initialState = {
    cart: getCartData(),
    totalItems: 0,
    totalAmount: 0,
    sheepingFee:342
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    //Add to cart............addToCart compo.
    const addToCart = (id, color, amount, product) => {
        //console.log(product)
        dispatch({type:ADD_TO_CART,payload:{id,color,amount,product}})
    }

    //remove item from cart..........
    const removeFromCart = (id) => {
        dispatch({type:REMOVE_CART_ITEM,payload:id})
    }

    //toggle amount ................
    const toggleAmount = (id, value) => {
        // console.log(id,value)
        dispatch({type:TOGGLE_CART_ITEM_AMOUNT,payload:{id,value}})
    }
    
    //clear cart..............
    const clearCart = () => {
        dispatch({type:CLEAR_CART})
    }

    //I want to persist the data ,I am cart value ,amount and all things ,so I used here useeffet when something in cart Then i
    //want to run my useEffect that is going to store cart value in localy.
    useEffect(() => {
        dispatch({type:COUNT_CART_TOTALS})  //to cart totals..........
        localStorage.setItem('cart',JSON.stringify(state.cart))
    },[state.cart])
    return (
        <CartContext.Provider value={{...state,addToCart,removeFromCart,toggleAmount,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}

