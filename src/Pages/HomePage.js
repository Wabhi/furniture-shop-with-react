import React from 'react'
import Hero from "../Components/Hero"
import FeaturedProduct from "../Components/FeaturedProduct"
import Services from "../Components/Services"
import Contact from "../Components/Contact"
const HomePage = () => {
    return (
        <main>
            <Hero />
            <FeaturedProduct />
             <Services />
            <Contact/> 
        </main>
    )
}

export default HomePage
