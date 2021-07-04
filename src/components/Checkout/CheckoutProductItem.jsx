import React from 'react'
import { displayWeight } from '../../functions/displayWeight'
import { useProduct } from '../Context/ProductContext'

export const CheckoutProductItem = ({ cartItem, quantity, increase, decrease, deleteItem }) => {
	return (
		<li className="checkout__product">
			<img className="checkout__product-img" src={cartItem.img} />
			<div className="checkout__product-info">
				<h3 className="checkout__product-heading">{cartItem.title}</h3>
				<div className="checkout__product-weight">
					<button className="checkout__product-weight-button" type="button" onClick={() => decrease(cartItem.id)}>
						<svg width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 0.5L1 0.5" stroke="#383634" strokeLinecap="round" />
						</svg>
					</button>
					<p className="checkout__product-weight-text" style={{ textAlign: "center" }}>{displayWeight((quantity * cartItem.volume))}kg</p>
					<button className="checkout__product-weight-button" type="button" onClick={() => increase(cartItem.id)}>
						<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 0.5V8.5M9 4.5L1 4.5" stroke="#383634" strokeLinecap="round" />
						</svg>
					</button>
				</div>
			</div>
			<div className="checkout__product-cost">${(cartItem.price * quantity).toFixed(2)}</div>
			<button className="checkout__product-delete" type="button" onClick={() => { deleteItem(cartItem.id) }}>
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 1L6 6M6 6L11 1M6 6L1 11M6 6L11 11" stroke="#383634" strokeWidth="1.5" strokeLinecap="round" />
				</svg>
			</button>
		</li>
	)
}