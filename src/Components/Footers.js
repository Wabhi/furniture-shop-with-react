import React from 'react'
import styled from "styled-components"
const Footers = () => {
    return (
        <Wrapper>
            <h5>
                &copy; {new Date().getFullYear()}
                <span> BlackHawk</span>
            </h5>
            <h5>All rights reserve.</h5>
            <h5> Banglore Electronic City <span>Phase-2</span></h5>
        </Wrapper>
    )
}

//Footer styling..............................................
const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footers
