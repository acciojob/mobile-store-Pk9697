import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit({ products = [], updateProducts, deleteProduct }) {
	const { productId } = useParams()
	const navigate = useNavigate()
	const product = products.find((product) => product.id === Number(productId))
	const [formData, setFormData] = useState({ ...product })

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData((prevState) => ({ ...prevState, [name]: value }))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		updateProducts(formData.id, formData)
	}

	const handleDeleteProduct = () => {
		deleteProduct(formData.id)
		navigate('/admin')
	}

	if (!product) return null

	return (
		<div className='edit'>
			<form>
				<label htmlFor='title'>Title</label>
				<input
					onChange={handleChange}
					type='text'
					id='title'
					name='title'
					value={formData.title}
				/>
				<label htmlFor='description'>Description</label>
				<textarea
					onChange={handleChange}
					rows='5'
					id='description'
					name='description'
					value={formData.description}
				></textarea>
				<label htmlFor='image'>Image</label>
				<input
					onChange={handleChange}
					type='text'
					id='image'
					name='image'
					value={formData.image}
				/>
				<label htmlFor='price'>Price</label>
				<input
					onChange={handleChange}
					type='number'
					id='price'
					name='price'
					value={formData.price}
				/>
				<div className='edit-btn-container'>
					<div>
						<a onClick={handleDeleteProduct}>Delete</a>
						<a type='submit' onClick={handleSubmit}>
							Save
						</a>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Edit
