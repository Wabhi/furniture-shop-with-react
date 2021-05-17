import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

const ListView = ({products}) => {
    return (
        <Wrapper>
            {products.map((product) => {
                const { id, name, image, price, description } = product
                return (
                    <article key={id}>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <h5 className="price">Rs {`${price / 10}0`}</h5>
                            {/* to get peice of description not all. */}
                            <p>{description.substring(0, 150)}...</p>  
                            <Link to={`/products/${id}`} className="btn">
                                Details
                            </Link>
                        </div>
                    </article>
                )
            })}
        </Wrapper>
    )
}
const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h5{
      color:blue !important;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`
export default ListView
