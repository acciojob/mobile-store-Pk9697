import React from 'react'
import { Link } from 'react-router-dom'

function Product({ product = {} }) {
	return (
		<div className='product'>
			<img src={product.image} alt={product.title} />
			<h5>{product.title}</h5>
            <p>Price: ${product.price}</p>
            <Link to={`/products/${product.id}`}>Buy</Link>
		</div>
	)
}

export default Product
