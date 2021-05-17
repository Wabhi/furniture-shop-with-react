import React from 'react'
import styled from "styled-components"
import { FaShoppingCart, FaUserMinus, FaUserPlus,FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useProductsContext } from "../Contexts/products_context"
import {useCartContext} from "../Contexts/cart_context"

const CartButtons = () => {
    //here the same things i am grabing the fuctionality to close the side bar when i cliked the button from global context....
  const { CloseSidebar } = useProductsContext()
  const {cart} = useCartContext()
  
    return (
        <Wrapper className="cart-btn-wrapper">
            <Link to="/cart" className="cart-btn" onClick={CloseSidebar}>
                Cart
                 <span className="cart-container">
                    <FaShoppingCart />
                    <span className="cart-value">{cart.length}</span>
                 </span>
        </Link>
        <div className="auth-btn-box">
            <Link to="/login" className="auth-btn">
               Login <FaUserPlus/>
            </Link>
            <Link  to="/signup" className="auth-btn">
               Signup <FaUserCircle/>
          </Link>
          </div>
        </Wrapper>
    )
}

//Cart button styling.......................................
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: crimson;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.85rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
}`

export default CartButtons
