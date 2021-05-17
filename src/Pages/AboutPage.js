import React from 'react'
import styled from "styled-components"
import PageHero  from "../Components/PageHero"
import aboutImge from "../Assets/hero-bcg.jpeg"

const AboutPage = () => {
    return (
        <main>
            <PageHero title="About"/>
            <Wrapper className="page section section-center">
                <img src={aboutImge} alt="about" />
                <article>
                    <div className="title">
                        <h2>Our Story</h2>
                        <div className="underline"></div>
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </article>
            </Wrapper>
       </main>
    )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
