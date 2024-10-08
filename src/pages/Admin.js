import React from 'react'
import { Link } from 'react-router-dom'

function Admin({ products = [] }) {
	return (
		<div className='admin'>
			<button>Add Product</button>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<div className='col-12'>
							<div>
								<Link to={`/admin/products/${product.id}`}>
									<div className='admin-product'>
										<img src={product.image} alt={product.title} />
										<h5>{product.title}</h5>
									</div>
								</Link>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Admin
