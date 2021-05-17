import {
    ADD_TO_CART,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
  } from '../actions'
  
const cart_reducer = (state, action) => {

  //add to cart......
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload

    //I checked first in state where we have cart and,I checked first it has already an item or not ,if not that add new one 
    //over existing and i also want with same product with diffent color so i took up id+color.
    const tempItem = state.cart.find((item)=>item.id===id+color)
    if (tempItem) {
      //item is already in the cart..........
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmmount = cartItem.amount + amount
          if (newAmmount > cartItem.max) {
            newAmmount = cartItem.max
          }
          return {...state,amount:newAmmount}
        }
        else {
          return cartItem
        }
      })
      return {...state,cart:tempCart}
    } else {
      //item is not in the cart............
      const newItem = {
        id: id + color,
        name: product.name,
        amount,
        color,
        image: product.images[0].url,
        price: product.price,
        max:product.stock
      }
      return {...state,cart:[...state.cart,newItem]}
    }
  }

  //remove an items from cart..............
  if (action.type === REMOVE_CART_ITEM) {
    const temCart = state.cart.filter((item) => item.id !== action.payload)
    return {...state,cart:temCart}
  }
  
  //clear the cart..............
  if (action.type === CLEAR_CART) {
    return {...state,cart:[]}
  }

  //toggle the amount........
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    const tempProduct = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'inc') {
          let amountNew = item.amount + 1
          if (amountNew > item.max) {
            amountNew = item.max
          }
          return {...item,amount:amountNew}
        }
        if (value === 'dec') {
          let amountNew = item.amount - 1
          if (amountNew < 1) {
            amountNew = 1
          }
          return {...item,amount:amountNew}
        }
      }
      else {
        return item;
      }
    })
    return {...state,cart:tempProduct}
  }

  //for total amount to next ready to checkout................
  if (action.type === COUNT_CART_TOTALS) {
    const { totalItems, totalAmount } = state.cart.reduce((total, item) => {
      const { price, amount } = item
      total.totalItems += amount
      total.totalAmount +=price*amount
      return total
    }, { totalAmount: 0, totalItems: 0 }
    )
    return {...state,totalAmount,totalItems}
  }
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
export default cart_reducer