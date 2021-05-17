import React from 'react'
import styled from "styled-components"
import {BsFillCaretLeftFill,BsFillCaretRightFill} from "react-icons/bs";
const AmountButtons = ({amount,increase,decrease}) => {
    return (
        <Wrapper className="amount-btsn">
            <button type="button" className="amount-btn" onClick={decrease}><BsFillCaretLeftFill  title="Decrease" style={{ fill: "blue"}}/></button>
            <h4>{amount}</h4>
            <button type="button" className="amount-btn" onClick={increase}><BsFillCaretRightFill  title="Increase" style={{ fill: "blue"}}/></button>
        </Wrapper>
    )
}
const Wrapper = styled.div`
  display: grid;
  width: 120px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`
export default AmountButtons
