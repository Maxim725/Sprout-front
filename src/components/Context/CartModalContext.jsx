import React, { useState, createContext, useContext } from 'react'

const Context = createContext()

export const useCartModal = () => {
	return useContext(Context)
}

export const CartModalProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = (flag) => {
		setIsOpen(flag || !isOpen)
	}

	return (
		<Context.Provider value={{
			isOpen,
			toggle
		}}>
			{ children}
		</Context.Provider>
	)
}