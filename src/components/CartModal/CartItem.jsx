import React, { useState, useEffect } from 'react'
import { displayWeight } from '../../functions/displayWeight'
import { useEventsProducts } from '../Context/ProductContext'
import { Link } from 'react-router-dom'
import { normalizeTitle } from '../../functions/normalizeTitle'
import { useBreadcrumbs } from '../Context/BreadCrumbsContext'

export const CartItem = ({ products, cartItem, deleteItem, increase, decrease }) => {
	const { clearBreadcrumbs, pushItem, breadcrumbs } = useBreadcrumbs()
	const { getProduct } = useEventsProducts()
	const [product, setProduct] = useState(getProduct(cartItem.id))
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(false)

	}, [cartItem])

	const setBradcrumbs = () => {
		clearBreadcrumbs()
		pushItem({ title: "Homepage2", link: "/" })
		pushItem({ title: "catalog", link: `/catalog/${product.categoriesId[0]}` })
	}
	return (
		<>
			{
				loading ? "Loading" :
					<>
						<Link to={`/product/${cartItem.id}`} onClick={() => { setBradcrumbs() }}>
							<img className="cart-modal__cart-item-img" src={product.img} />
						</Link>
						<div className="cart-modal__cart-item-info">
							<Link to={`/product/${cartItem.id}`} onClick={() => { setBradcrumbs() }}>
								<h3 className="cart-modal__cart-item-heading">{normalizeTitle(product.title)}</h3>
							</Link>
							<div className="cart-modal__cart-item-weight">
								<button className="cart-modal__cart-item-weight-button" onClick={() => decrease(cartItem.id)}>
									<svg width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9 0.5L1 0.5" stroke="#383634" strokeLinecap="round" />
									</svg>
								</button>
								<p className="cart-modal__cart-item-weight-text">{displayWeight(cartItem.quantity * product.volume)} kg</p>
								<button className="cart-modal__cart-item-weight-button" onClick={() => increase(cartItem.id)}>
									<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5 0.5V8.5M9 4.5L1 4.5" stroke="#383634" strokeLinecap="round" />
									</svg>
								</button>
							</div>
						</div>
						<div className="cart-modal__cart-item-cost">${(product.price * cartItem.quantity).toFixed(2)}</div>
						<button className="cart-modal__cart-item-delete" onClick={() => { deleteItem(cartItem.id) }}>
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1L6 6M6 6L11 1M6 6L1 11M6 6L11 11" stroke="#383634" strokeWidth="1.5" strokeLinecap="round" />
							</svg>
						</button>
					</>
			}
		</>
	)
}