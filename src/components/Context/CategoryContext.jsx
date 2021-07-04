import React, { createContext, useContext, useState, useEffect } from 'react'
import { CATEGORIES_ALL } from '../../API_LINKS'
import { normalizeFetchedData } from '../../functions/normalizeFetchedData'

const Context = createContext()

export const useCategory = () => {
	return useContext(Context)
}

export const CategoryProvider = ({ children }) => {
	const [categories, setCategories] = useState(undefined)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getCategories()
			.then(data => {
				setCategories(data)
				setLoading(false)
			})
	}, [])

	const getCategories = async () => {
		if (!categories) {
			const res = await fetch(CATEGORIES_ALL)
			const data = await res.json()
			const storage = normalizeFetchedData(data)

			return storage
		}
		else {
			return categories
		}

	}

	const getCategory = (id) => {
		if (categories)
			return categories[id]
	}

	return (
		<Context.Provider value={{ getCategories, getCategory }}>
			{loading ? "Loading" : children}
		</Context.Provider>
	)
}