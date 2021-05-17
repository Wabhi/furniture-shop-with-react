import React from 'react'
import styled from "styled-components"
import Product from "../Components/Product"
const GridView = ({products}) => {
    return (
        //just getting the produucts and display it in gridview that data is coming from ProductList as props.
        <Wrapper>
            <div className="products-container">
                {products.map((product) => {
                    // and display all product in grid view by using product component which is already set with all functionality.
                    return <Product key={product.id} {...product}/>
                })}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  img {
    height: 175px;
  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
export default GridView
