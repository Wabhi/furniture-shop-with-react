import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaCheck } from "react-icons/fa"
import {useCartContext} from "../Contexts/cart_context"
import AmountButtons from "../Components/AmountButtons"
const AddToCart = ({ product }) => {
    //grab the data from cart_context..
    const { addToCart } = useCartContext()
    //console.log(product.name,product.id,product.price)
    const { id, stock, colors } = product
    //to get and set array of colors.........
    const [mainColor, setMainColor] = useState(colors[0])
    //to get and set number of quantity of product which you want to add in cart
    const [amount, setAmount] = useState(1)

    //increase the quantity..........
    //here i also check if user increase the quantity then numnber of qunatity increase but if quantity become out of stock
    //he won't be able to increase it and default value should be stock.
    const increase = () => {
        //console.log('Increase clicked.....')
        setAmount((currentAmount) => {
            let newAmount = currentAmount + 1
            if (newAmount > stock) {
                newAmount=stock
            }
            return newAmount;
        })
    }
    //decrease the quntity...........
    //here i also check if user decrease the quantity then number of quantity decrease but if should not happen when quantity become 1.
    const decrease = () => {
        //console.log('Decrease clicked.....')
        setAmount((currentAmount) => {
            let newAmount = currentAmount - 1
            if (newAmount < 1) {
                newAmount=1
            }
            return newAmount;
        })
    }
    return (
        <Wrapper>
            <div className="colors">
                <span>Colors : </span>
                <div>
                    {colors.map((color, index) => {
                        // here i check two functionality first if mainColor is equal to color then make it active using
                        //conditional class css opacity propertity that so dark for if match if not math then show it light.
                        //and second for if mainColor is equal to color then i want to use check mark based on that.
                        return <button key={index} className={`${mainColor===color?"color-btn active":"color-btn"}`}
                            style={{ background: color }} onClick={()=>setMainColor(color)}>
                            {mainColor===color ? <FaCheck/> : null}
                        </button>
                    })}
                </div>
            </div>
            {/* this is cart where we can increase and decrease the quantity and we pass it through props in amountButton component. */}
            <div className="btn-container">
                <AmountButtons amount={amount} increase={increase} decrease={decrease} />
                <Link to="/cart" className="btn" onClick={()=>addToCart(id,mainColor,amount,product)}>
                    Add to cart
                </Link>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`

export default AddToCart
