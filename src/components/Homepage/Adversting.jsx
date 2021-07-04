import React from 'react'
import MainBanner from '../../img/MainBanner.png'
import AdditionalBanner from '../../img/AdditionalBanner.png'
import '../../styles/Adversting.scss'

export const Adversting = () => {
	return (
		<div className="adversting">
			<div className="adversting__main-banner">
				<div className="adversting__main-container">
					<h2 className="adversting__main-header">Organic bar</h2>
					<p className="adversting__main-text">
						Especially suitable for athletes,
						but also ideal for preventing fatigue and loss
						of productivity.
					</p>
					<button className="adversting__main-button">Shop now</button>
				</div>
				<img className="adversting__main-img" src={MainBanner} alt="main banner" draggable="false" />
			</div>
			<div className="adversting__additional-banner">
				<h3 className="adversting__additional-heading">Spring promo code:</h3>
				<h2 className="adversting__additional-header">Fruits2021</h2>
				<p className="adversting__additional-text">Gives 10% off all seasonal fruits on your first purchase</p>
				<img className="adversting__additional-img" src={AdditionalBanner} alt="additional banner" draggable="false" />
			</div>
		</div>
	)
}