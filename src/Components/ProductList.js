import React from 'react'
import { useFilterContext } from "../Contexts/filter_context"
import GridView from "../Components/GridView"
import ListView from "../Components/ListView"
const ProductList = () => {
    const { filterProducts: products,gridView } = useFilterContext()
    //console.log(products)
    if (products.length < 1) {
        return (
            <h5 style={{textTransform:"none"}}>Sorry, No products matched with your search...</h5>
        )
    }
    if (gridView === false) {
        return <ListView products={products}/>
    }
    return (
        <GridView products={products}>Product Lists</GridView>
    )
}

export default ProductList
