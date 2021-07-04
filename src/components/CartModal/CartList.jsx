import React, { useEffect } from 'react'
import Jerky from '../../img/JerkyPermission.png'
import { useCart, useEventsCart } from '../Context/CartContext'
import { CartItem } from './CartItem'

export const CartList = () => {
	const { cart } = useCart()

	useEffect(() => {
		console.log(cart)
	}, [cart])

	const { increase, decrease, deleteItem } = useEventsCart()

	const products = [
		{ id: 1, img: Jerky, title: 'Jerky permission', cost: 2.80, weight: 1000 },
		{ id: 2, img: 'https://via.placeholder.com/48x61.png', title: 'Spiced nuts', cost: 2.80, weight: 1000 },
		{ id: 3, img: 'https://via.placeholder.com/48x61.png', title: 'Macadamia in the shell', cost: 2.80, weight: 1000 },
		{ id: 4, img: 'https://via.placeholder.com/48x61.png', title: 'Banana', cost: 2.80, weight: 1000 },
		{ id: 5, img: 'https://via.placeholder.com/48x61.png', title: 'Premium kiwifruit', cost: 2.80, weight: 1000 },
	]

	return (
		<ul className="cart-modal__cart-items">
			{Object.values(cart).map((el, i) => {
				return (
					<li className="cart-modal__cart-item" key={i} >
						<CartItem
							key={el.id}
							products={products}
							cartItem={el}
							increase={increase}
							decrease={decrease}
							deleteItem={deleteItem} />
					</li>
				)
			})}
		</ul>
	)
}
