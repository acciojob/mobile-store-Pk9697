import React, { useEffect, useState } from 'react'
import './../styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import Detail from '../pages/Detail'
import Edit from '../pages/Edit'

const App = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=8')
			.then((res) => res.json())
			.then((data) =>
				setProducts(data.map((product, idx) => ({ ...product, id: idx + 1 })))
			)
	}, [])

	const updateProducts = (productId, formData = {}) => {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === productId ? { ...product, ...formData } : product
			)
		)
	}

	const deleteProduct = (id) => {
		setProducts((prevProducts) =>
			prevProducts.filter((product) => product.id !== id)
		)
	}

	return (
		<div>
			{/* Do not remove the main div */}
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home products={products} />} />
					<Route path='/admin' element={<Admin products={products} />} />
					<Route
						path='/products/:productId'
						element={<Detail products={products} />}
					/>
					<Route
						path='/admin/products/:productId'
						element={
							<Edit
								products={products}
								updateProducts={updateProducts}
								deleteProduct={deleteProduct}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
