import React, { createContext, useContext, useEffect, useState } from 'react'
import { PRODUCTS_ALL, PRODUCTS_DISCOUNTED, PRODUCTS_NEW_ADDITIONS } from '../../API_LINKS'
import { ProductData } from '../../data/ProductData'
import { normalizeFetchedData } from '../../functions/normalizeFetchedData'

const ProductContext = createContext()
const ProductEventsContext = createContext()

export const useProduct = () => {
	return useContext(ProductContext)
}

export const useEventsProducts = () => {
	return useContext(ProductEventsContext)
}

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState(undefined)
	const [loading, setLoading] = useState(true)
	const [discountedGoodsSlider, setDiscountedGoodsSlider] = useState(undefined)
	const [newAdditionsProducts, setNewAdditionsProducts] = useState(undefined)

	useEffect(() => {
		fetchedProducts()
			.then(data => {
				setProducts(data)
				setLoading(false)
			})

	}, [])


	const getProduct = (id) => {
		return products[id]
	}

	const getDiscountedProducts = async () => {
		if (!discountedGoodsSlider) {
			const res = await fetch(PRODUCTS_DISCOUNTED, { method: "GET" })

			const data = await res.json()

			const storage = normalizeFetchedData(data)

			setDiscountedGoodsSlider(storage)

			return storage
		}

		return discountedGoodsSlider
	}

	const fetchedProducts = async () => {
		const res = await fetch(PRODUCTS_ALL, { method: "GET" })
		const data = await res.json()
		const storage = normalizeFetchedData(data)

		console.log("PRODUCTS__ALL", storage)

		return storage
	}

	const getNewProducts = async () => {
		if (!newAdditionsProducts) {
			const res = await fetch(PRODUCTS_NEW_ADDITIONS)

			const data = await res.json()

			const storage = normalizeFetchedData(data)

			setNewAdditionsProducts(storage)
			return storage
		}

		return newAdditionsProducts
	}

	const getProductsByCategoryId = (id) => {
		const storage = {}
		Object.values(products).forEach(el => {
			if (el.categoriesId.includes(+id)) {
				storage[el.id] = el
			}
		})
		console.log("STORAGE::::", storage)
		return storage
	}

	return (
		<ProductContext.Provider value={{
			products: products
		}}>
			<ProductEventsContext.Provider value={{
				getProduct: getProduct,
				getDiscountedProducts: getDiscountedProducts,
				getNewProducts: getNewProducts,
				getProductsByCategoryId,
			}}>
				{!loading && children}
			</ProductEventsContext.Provider>
		</ProductContext.Provider>
	)
}