import React, { useState, useEffect, useMemo } from 'react'
import { displayWeight } from '../../functions/displayWeight'
import { useEventsCart, useCart } from '../Context/CartContext'
import { ButtonAddToCart } from './ButtonAddToCart'

export const AddToCart = ({ id, price, volume }) => {
	const { increase, decrease, addToCart, isAdded } = useEventsCart()
	const cart = useCart()
	const [quantity, setQuantity] = useState(1)
	const memoIsAdd = useMemo(() => isAdded(id), [id, cart])

	const increaseQuantity = () => {
		setQuantity(quantity + 1)
	}

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1)
		}
	}

	const addItem = () => {
		addToCart(id, quantity)
	}

	return (
		<div className="product__add-cart">
			<div className="product__total-container">
				<h4 className="product__total">Total:&nbsp;$&nbsp;{(price * quantity).toPrecision(3)}</h4>
				<p className="product__subtotal">
					<span>$ {price}</span>
					<span>/ {volume}g</span>
				</p>
			</div>
			<div className="product__add-cart-buttons">
				<div className="product__weight-container">
					<button className="product__weight-button" onClick={decreaseQuantity}>
						<svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13 1L1 1" stroke="#383634" stroke-width="1.5" stroke-linecap="round" />
						</svg>
					</button>
					<p className="product__weight-text">{displayWeight(quantity * volume)} kg</p>
					<button className="product__weight-button" onClick={increaseQuantity}>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7 1V13M13 7L1 7" stroke="#383634" stroke-width="1.5" stroke-linecap="round" />
						</svg>
					</button>
				</div>
				<ButtonAddToCart addItem={addItem} isAdded={memoIsAdd} />
			</div>
		</div>
	)
}