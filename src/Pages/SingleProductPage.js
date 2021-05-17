import React, { useEffect } from 'react'
import styled from "styled-components"
import { useHistory, useParams, Link } from "react-router-dom"
import {single_product_url as url} from "../Utils/Constant"
import { useProductsContext } from "../Contexts/products_context"
import Loading from "../Components/Loading"
import Error from "../Components/Error"
import PageHero from "../Components/PageHero"
import Stars from "../Components/Stars"
import AddToCart from "../Components/AddToCart"
import ProductImages from "../Components/ProductImages"

const SingleProductPage = () => {
    //if you want to grab the id ,I mean somehow you want to nevigate through url,id then useParams is best choice.
    //here i want to display the single image/product when i click one,then there should be something which is id 
    // and with id i want perform something,thats why I used useParams to get id which is attach inside url. 
    //console.log(useParams())
    const { id } = useParams()
    const history = useHistory()
    const { sigleProductLoading: loading, sigleProductError: error, sigleProduct: product, fetchSingleProduct } = useProductsContext()

    //here i used useeffect to get product when coompont is mounted and set dependecy as id bcz i want when id change
    //it should be run,and each and every id it give me a product.
    useEffect(() => {
        fetchSingleProduct(`${url}${id}`)
    }, [id])

    //I want to go back to my home after sometimes I don't want leave a massge to screen and wait for forcefully go back
    //therefor i used another useeffect which is depend upon error,initialy fasle but after laoding it is true.you can do it by
    //useHistory or redirect.
    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history.push('/')
            }, 4000)
        }
    }, [error])
    //console.log(product)
    if (loading) {
        return <Loading/>
    }
    if (error) {
        return <Error/>
    }

    //destructure all the properties from product...........
    const { name, price, description, stock, stars, reviews, id: ase, company, images } = product
    return (
        <Wrapper>
            <PageHero title={name} product />
            <div className="section section-center page">
                <Link to="/products" className="btn">
                    Back to products
                </Link>
                <div className="product-center">
                    <ProductImages images={images} />
                    <section className="content">
                      <h2>{name}</h2>
                       {/* pass the stars and reviews as a props.*/}
                         <Stars stars={stars} reviews={reviews}/>
                        <h5>Rs {`${price / 10}0`}</h5>
                        <p className="desc">{description}.</p>
                        <p className="info">
                            <span>Available : </span>
                            {stock>0?'In stock':'Out of stock'}
                        </p>
                        <p className="info">
                            <span>Brand : </span>
                            {company}
                        </p>
                        <hr />
                        {stock > 0 && <AddToCart product={product} />}
                    </section>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .btn{
    background:rgb(255,126,0) !important;
  }
  h5{
    color:blue;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`
export default SingleProductPage
