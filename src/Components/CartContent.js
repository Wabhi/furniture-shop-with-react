import React from 'react'
import styled from "styled-components"
import { useCartContext } from "../Contexts/cart_context"
import { Link } from "react-router-dom"
import CartItems from "../Components/CartItems"
import CartColumns from "../Components/CartColumns"
import CartTotals from "../Components/CartTotals"


const CartContent = () => {
    const {cart,clearCart} = useCartContext()
    return (
        <Wrapper className="section section-center">
            <CartColumns />
            {
                cart.map((item) => {
                    return <CartItems key={item.id} {...item} />
                })
            }
            <hr style={{ border: 'solid 1px orange' }} />
            <div className="link-container">
                <Link className="link-btn" to="/products">
                    Continue Shopping
                </Link>
                <button className="clear-btn btn" onClick={clearCart}>
                    Clear Cart
                </button>
            </div>
            <CartTotals/>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
    color:white;
  }
`
export default CartContent
