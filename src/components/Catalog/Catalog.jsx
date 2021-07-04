import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { Goods } from './Goods'
import '../../styles/Catalog.scss'
import { useProduct, useEventsProducts } from '../Context/ProductContext'
import { useRouteMatch } from 'react-router-dom'

export const Catalog = () => {
	const [categoryProduct, setCategoryProduct] = useState(undefined)
	const { getProductsByCategoryId } = useEventsProducts()
	const match = useRouteMatch('/catalog/:id')
	const [id, setId] = useState(undefined)
	const products = useProduct()

	useEffect(() => {
		setId(match.params.id)
	}, [match])

	useEffect(() => {
		if (id) {
			const data = getProductsByCategoryId(id)
			console.log("DATA:::::", data)
			console.log(data)

			setCategoryProduct(data)
		}
	}, [id])

	const priceRangeFiltered = (min, max) => {
		console.log("FILTER_PRICE:::", min, max)
	}

	const countryFiltered = (countries) => {
		console.log("FILTER_FORM:::", countries)

	}

	const formFiltered = (form) => {
		console.log("FILTER_FORM:::", form)
	}

	const volumeFiltered = (volume) => {
		console.log("FILTER_FORM:::", volume)
	}

	return (
		<div className="catalog catalog__container">
			<Sidebar actions={{ priceRangeFiltered, countryFiltered, formFiltered, volumeFiltered }} />
			{
				categoryProduct
					? <Goods products={categoryProduct} />
					: "Loading"
			}
		</div>
	)
}