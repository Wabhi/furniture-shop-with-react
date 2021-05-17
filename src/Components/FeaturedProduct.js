import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useProductsContext } from "../Contexts/products_context"
import Loading from "../Components/Loading"
import Error from "../Components/Error"
import Product from "../Components/Product"

const FeaturedProduct = () => {
    const { productsLoading: loading, productsError: error, featuredProducts: featured } = useProductsContext()
    //If the featured product taking sometimes to load the data i want to set a spinner,which value is coming from productConetext true/false.
    if (loading) {
        return <Loading/>
    }
    if (error) {
        return <Error/>
    }
    return (
        <Wrapper className="section">
            <div className="title">
                <h2>Featured Products</h2>
                <div className="underline"></div>
            </div>
            <div className="section-center featured">
                {/* if you want any number of products not all you can use slice method to reduce featured array length then display  */}
                {featured.map((product) => {
                    return <Product key={product.id} {...product}/>
                })}
            </div>
            <Link to="/products" className="btn">
              Products
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`
export default FeaturedProduct
