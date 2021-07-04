import React from 'react'
import ShoppingBag from '../../img/ShoppingBag.svg'
import { useAuth } from '../Context/AuthContext'
import { useCartModal } from '../Context/CartModalContext'

export const Cart = () => {
	const { toggle } = useCartModal()
	const { authorizedArea } = useAuth()

	const goodsAmount = 6

	const openCart = () => {
		authorizedArea(() => {
			toggle()
		})
	}
	return (
		<div className="header__cart" onClick={openCart}>
			<img className="header__cart-icon" alt="cart icon" src={ShoppingBag} draggable="false" />
			<span className="header__cart-text">Cart: {goodsAmount}</span>
		</div>
	)
}