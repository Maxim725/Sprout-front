import React, { useState, useEffect } from 'react'
import { Adversting } from './Adversting'
import { GoodsSlider } from './GoodsSlider'
import '../../styles/Homepage.scss'
import { WhatToCook } from './WhatToCook'
import { Bonus } from './Bonus'
import { HowWeWork } from './HowWeWork'
import { Footer } from './Footer'
import { useEventsProducts, useProduct } from '../Context/ProductContext'

export const Homepage = () => {
	const { getDiscountedProducts, getNewProducts } = useEventsProducts()
	const [discountLoading, setDiscountLoading] = useState(true)
	const [discountProducts, setDiscountProducts] = useState()

	const [newAdditionsProducts, setNewAdditionsProducts] = useState()
	const [newAdditionsLoading, setNewAdditionsLoading] = useState(true)

	useEffect(() => {
		console.log("DP::", discountProducts)
	}, [discountProducts])

	getDiscountedProducts()
		.then(data => {
			setDiscountProducts(data)
			setDiscountLoading(false)
		})

	getNewProducts()
		.then(data => {
			setNewAdditionsProducts(data)
			setNewAdditionsLoading(false)
		})

	return (
		<div className="homepage" style={{ width: '100%' }}>
			<Adversting />
			{discountLoading
				? null
				: (
					<>
						<GoodsSlider products={discountProducts} />
						<hr className="homepage__delimiter" />
					</>)
			}
			<WhatToCook />
			<hr className="homepage__delimiter" />
			<Bonus />
			<hr className="homepage__delimiter" />
			{newAdditionsLoading
				? null
				: (
					<>
						<GoodsSlider products={newAdditionsProducts} titleComponent="New additions" />
						<hr className="homepage__delimiter" />
					</>)
			}
			<HowWeWork />
		</div>
	)
}