import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
const PageHero = ({title,product}) => {
    return (
        <Wrapper>
            <div className="section-center">
             <Link to="/">Home</Link>
             {product && <Link to="/products">/ Products</Link>}
                / <span className="capt">{title}</span>
             </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  background: rgb(178,255,255);
  width: 100%;
  margin-top:4px;
  font-size:24px;
  font-weight:800;
  min-height: 13vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  .section-center>.capt{
    text-transform: capitalize;
  }
`
export default PageHero
