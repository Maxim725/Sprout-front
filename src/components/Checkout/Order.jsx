import React from 'react'
import { useEventsCart } from '../Context/CartContext'
import { useProduct } from '../Context/ProductContext'
import { CheckoutProductItem } from './CheckoutProductItem'

export const Order = ({ cartItems }) => {
	const { products } = useProduct()
	const { increase, decrease, deleteItem } = useEventsCart()

	return (
		<div className="checkout__right">
			<section className="checkout__order">
				<h2 className="checkout__order-heading">Your order:</h2>
				<div className="checkout__order-total-container">
					<p className="checkout__order-subtotal"><span>Subtotal:</span><span>$60.30</span></p>
					<p className="checkout__order-subtotal"><span>Delivery:</span><span>$8.20</span></p>
				</div>
				<p className="checkout__order-total"><span>Total:</span><span>$68.50</span></p>
				<button className="checkout__order-button" type="button">Purchase</button>
			</section>
			<ul className="checkout__products" style={{ paddingRight: products.length > 10 ? '20px' : '0px' }}>
				{
					cartItems.map(cartItem => {

						return <CheckoutProductItem cartItem={products[cartItem.id]} quantity={cartItem.quantity} key={cartItem.id} increase={increase} decrease={decrease} deleteItem={deleteItem} />
					})
				}
			</ul>
		</div>
	)
}