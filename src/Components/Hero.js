import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import Img1 from "../Assets/hero-bcg.jpeg"
import Img2 from "../Assets/hero-bcg-2.jpeg"
const Hero = () => {
    return (
        <Wrapper className="section-center">
            <article className="content">
                <h1>
                    Design Your <br/>
                    Comfort Zone
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                    <Link to="/products" className="btn hero-btn">Shop Now</Link>
                </h1>
            </article>
            <article className="img-container">
                <img src={Img1} alt="img1" className="main-img"/>
                <img src={Img2} alt="img2" className="accent-img"/>
            </article>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero