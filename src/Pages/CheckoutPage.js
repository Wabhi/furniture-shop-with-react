import React from 'react'
import styled from "styled-components"
import PageHero from "../Components/PageHero"

const CheckoutPage = () => {
    return (
        <main>
            <PageHero title="Checkout" />
            <Wrapper className="page"></Wrapper>
        </main>
    )
}
const Wrapper = styled.div`
`
export default CheckoutPage
