import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Product({ product = {} }) {
	const navigate=useNavigate()
	return (
		<div className='product btn' onClick={() => navigate(`/products/${product.id}`)}>
			<img src={product.image} alt={product.title} />
			<h5>{product.title}</h5>
			<p>Price: ${product.price}</p>
			<Link to={`/products/${product.id}`}>Buy</Link>
		</div>
	)
}

export default Product
