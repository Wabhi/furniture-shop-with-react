import React from 'react'
import styled from "styled-components"
import {useCartContext} from "../Contexts/cart_context"
import { Link } from "react-router-dom"
import PageHero from "../Components/PageHero"
import CartContent from "../Components/CartContent"

const CartPage = () => {

    //grab the cart data from cart_context..
    const { cart } = useCartContext()

    //if cart length is less than one means cart empty return this.
    if (cart.length < 1) {
        return (
            <Wrapper className="page-100">
                <div className="empty">
                    <h2 style={{ color:"rgb(191,0,255)",textTransform:"uppercase"}}>Your cart is empty ! 🙄</h2>
                    <Link to="/products" className="btn">
                      GO AND SHOP
                    </Link>
                </div>
            </Wrapper>
        )
    }
    
    //if cart length is not less than one means cart is not empty return this.
    return (
        <main>
            <PageHero title="cart"/>
            <Wrapper className="page">
                <CartContent/>
            </Wrapper>
        </main>
    )
}
const Wrapper = styled.main`
  .empty{
      text-align:center;
  }
  h2{
      margin-bottom:1rem;
      text-transform:none
  }
`

export default CartPage
