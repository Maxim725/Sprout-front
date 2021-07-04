import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/CartModal.scss'
import { useCartModal } from '../Context/CartModalContext'
import { CartList } from './CartList'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useCart, useEventsCart } from '../Context/CartContext'
import { useEventsProducts, useProduct } from '../Context/ProductContext'

export const CartModal = () => {
	const refClick = useRef();
	const { isOpen, toggle } = useCartModal()
	const [sumTotal, setSumTotal] = useState(0)
	const { cart, totalQuantity } = useCart()
	const { getProduct } = useEventsProducts()
	const { products } = useProduct()

	// Create a ref that we add to the element for which we want to detect outside clicks
	useClickOutside(refClick, () => {
		toggle(false)
	})

	useEffect(() => {
		console.log("CART__MODAL_PRODUCTS::::", products)
		console.log("CART__MODAL_CART:::", cart)
		if (products) {
			setSumTotal(Object.values(cart).reduce((acc, item) => {
				console.log("CART__MODAL_ITEM::::", item)
				console.log("CART__MODAL_PRODUCT::::", getProduct(item.id))
				return acc + getProduct(item.id).price * item.quantity
			}, 0))
		}
		else {
			setSumTotal(0)
		}
	}, [Object.keys(cart).length, totalQuantity, products])


	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		}
		else {
			document.body.style.overflow = 'visible'
		}
	})

	console.log(totalQuantity)

	return (
		<>
			{isOpen &&
				<div className="cart-modal container__center">
					<div className="cart-modal__centered">
						<div className="cart-modal__triangle"></div>
						<div className="cart-modal__cart" ref={refClick}>
							<h2 className="cart-modal__cart-heading">My shopping cart:</h2>
							<CartList />
							<div className="cart-modal__cart-subtotal">
								<h4 className="cart-modal__cart-subtotal-heading">Subtotal:</h4>
								<p className="cart-modal__cart-subtotal-total">${sumTotal.toFixed(2)}</p>
							</div>
							<Link to={`/checkout`}>
								<button className="cart-modal__cart-button">To checkout</button>
							</Link>
						</div>
					</div>
				</div>}
		</>
	)
}