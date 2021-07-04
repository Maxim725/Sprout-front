import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const useBreadcrumbs = () => {
	return useContext(Context)
}

export const BreadcrumbsProvider = ({ children }) => {
	const [items, setItem] = useState([])

	// link === /homepage или /catalog/1
	const push = (link) => {
		setItem((prev) => [...prev, link])
	}

	const clear = () => {
		setItem([])
	}

	const showTop = () => {
		return items[items.length - 1]
	}

	const pop = () => {
		const item = items.pop()

		setItem([...items])

		return item
	}

	return (
		<Context.Provider value={{
			breadcrumbs: items,
			pushItem: push,
			popItem: pop,
			clearBreadcrumbs: clear,
			showTopItem: showTop,
		}}>
			{ children}
		</Context.Provider>
	)
}