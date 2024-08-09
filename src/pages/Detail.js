import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Detail({ products = [] }) {
	const { productId } = useParams()
	const product = products.find((product) => product.id === Number(productId))
	if (!product) return null
	return (
		<div className='detail'>
			<img src={product.image} alt={product.title} />
			<h2>{product.title}</h2>
			<h3>Price: ${product.price}</h3>
			<p>
				<strong>Description:</strong> {product.description}
			</p>
			<Link to='/'>Other products</Link>
		</div>
	)
}

export default Detail
