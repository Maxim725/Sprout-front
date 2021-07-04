import React, { createContext, useContext, useState } from 'react'

const ContextCategoriesModal = createContext()

export const useCategoriesModal = () => {
	return useContext(ContextCategoriesModal)
}
export const CategoriesProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = (flag) => {
		setIsOpen(flag || !isOpen)
	}

	return (
		<ContextCategoriesModal.Provider value={{
			toggle: toggle,
			isOpen
		}}>
			{ children}
		</ContextCategoriesModal.Provider>
	)
}