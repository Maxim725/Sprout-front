import React, { createContext, useContext, useState, useEffect } from 'react'
import { CART } from '../../API_LINKS'
import { CartData } from '../../data/CartData'

const CartContext = createContext()
const CartEventsContext = createContext()

export const useCart = () => {
	return useContext(CartContext)
}

export const useEventsCart = () => {
	return useContext(CartEventsContext)
}

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState({})
	const [totalQuantity, setTotalQuantity] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetchCart().then(data => {
			setCart(data)
			setLoading(false)
		})
	}, [])

	useEffect(() => {
		const totalQuantity = Object.keys(cart).reduce((acc, itemId) => {
			return acc + cart[itemId].quantity
		}, 0)

		setTotalQuantity(totalQuantity)
	}, [cart])

	const addItem = (id, amount = 1) => {
		if (!cart[id]) {
			setCart({ ...cart, [id]: { id: +id, quantity: amount } })
			fetchAddItem(id, amount)
		}
		else {
			increase(id, amount)
		}
	}

	const deleteItem = (id) => {
		const newCartObj = Object.values(cart).filter(c => {
			return c.id !== id
		})

		const newCart = newCartObj.reduce((acc, el) => {
			acc[el.id] = el
			return acc
		}, {})

		setTotalQuantity(totalQuantity - cart[id].quantity)

		if (isAdded(id))
			fetchDeleteItem(id)

		setCart(newCart)
	}

	const increase = (id, amount = 1) => {
		setCart({ ...cart, [id]: { id: id, quantity: cart[id].quantity + amount } })
		fetchPutItem(id, amount, true)
		setTotalQuantity(totalQuantity + amount)
	}


	const decrease = (id, amount = 1) => {
		if (cart[id].quantity > amount) {
			setCart({ ...cart, [id]: { id: id, quantity: cart[id].quantity - amount } })
			fetchPutItem(id, amount, false)
			setTotalQuantity(totalQuantity - amount)
		}
		else {
			deleteItem(id)
		}
	}

	const isAdded = (id) => {
		return cart[id] ? true : false
	}

	const fetchCart = async () => {
		const res = await fetch(CART, {
			method: "GET",
			credentials: "include"
		})

		const data = await res.json()
		console.log("NORMALIZE_CART:::", data)

		if (data.status === 401) {
			return {}

		}
		return normalizeCart(data.cartItems)
	}

	const normalizeCart = (data) => {
		const storage = {}
		data.forEach(el => {
			storage[el.productId] = { id: el.productId, quantity: el.quantity }
		})

		return storage
	}

	const fetchAddItem = async (productId, quantity) => {
		const res = await fetch(CART, {
			method: "POST",
			credentials: "include",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				productId: productId,
				quantity: quantity
			})
		})

		if (!res.ok) {
			console.error("Error: На сервер продут не был добавлен")
		}
	}

	const fetchPutItem = async (productId, quantity, increase = true) => {
		const res = await fetch(CART, {
			method: "PUT",
			credentials: "include",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				productId: productId,
				quantity: quantity,
				increase: increase
			})
		})
	}

	const fetchDeleteItem = async (productId) => {
		const res = await fetch(`${CART}/delete/${productId}`, {
			method: "DELETE",
			credentials: "include",
			headers: { 'Content-Type': 'application/json' },
			// body: JSON.stringify({ productId: productId })
		})
	}

	return (
		<CartContext.Provider value={{
			cart,
			totalQuantity
		}}>
			<CartEventsContext.Provider value={{
				increase: increase,
				decrease: decrease,
				addToCart: addItem,
				deleteItem: deleteItem,
				isAdded,
			}}>
				{!loading && children}
			</CartEventsContext.Provider>
		</CartContext.Provider>
	)
}