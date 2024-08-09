import React from 'react'
import Products from '../components/Products'

function Home({ products = [] }) {
    return (
        <>
            <Products products={products}/>
        </>
    )
}

export default Home
