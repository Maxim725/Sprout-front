import React from 'react'
import DiscountIcon from '../../img/Discount.svg'

export const Discount = () => {
	const bouns = 15
	return (
		<div className="header__discount">
			<img className="header__discount-icon" alt="discounticon" src={DiscountIcon} draggable="false" />
			<span className="header__discount-text">Bonus: {bouns}%</span>
		</div>
	)
}