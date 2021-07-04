import React, { useState } from 'react'
import { Link } from 'react-dom'
import { GoodsItem } from './GoodsItem'
import DiscountIcon from '../../img/DiscountGoods.svg'
import '../../styles/Compilation.scss'
import Arrow from '../../img/ArrowDown.svg'
import imgTemplate from '../../img/BlueBerry.png'

export const GoodsSlider = ({ products, titleComponent = 'Discounted goods' }) => {
	const [collection, setCollection] = useState(products)
	const [counterSlider, setCounterSlider] = useState(0)

	const ITEMS_VISIBLE = 4
	const iconComponent = DiscountIcon

	const clickNext = () => {
		if (counterSlider < Object.values(collection).length - ITEMS_VISIBLE) // + 1
			setCounterSlider(counterSlider + 1)
	}

	const clickPrev = () => {
		if (counterSlider > 0)
			setCounterSlider(counterSlider - 1)
	}

	let opacity = 1

	return (
		<section className="compilation">
			<div className="compilation__header-container">
				<div className="compilation__header">
					<img className="compilation__header-icon" src={iconComponent} alt="discount goods" />
					<h3 className="compilation__header-heading">{titleComponent}</h3>
				</div>
				<div className="compilation__header-view">
					<p className="compilation__header-view-text">View All</p>
					<img className="compilation__header-view-icon" src={Arrow} alt="arrow" style={{ transform: 'rotate(-90deg)', width: '12px' }} />
				</div>
			</div>
			<div className="compilation__slider">
				<div className="compilation__slider-fade-left"></div>
				<div className="compilation__slider-fade-right"></div>
				<div className="compilation__slider-collection">
					{Object.values(collection).map((el, i) => {
						if (i > ITEMS_VISIBLE - 1 + counterSlider ||
							i < counterSlider) {
							opacity = 0.5
						}
						else {
							opacity = 1
						}
						return <GoodsItem key={el.id} {...el} style={{ opacity: opacity, transform: `translateX(calc(calc(-100% - 12px) * ${counterSlider}))`, transition: '0.2s' }} />
					})}
				</div>
				<div className="compilation__slider-arrow-left" onClick={clickPrev}>
					<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="compilation__path" d="M7 1.5L4 4.5L1 1.5" stroke="#383634" strokeWidth="1.5" strokeLinecap="round" />
					</svg>
				</div>
				<div className="compilation__slider-arrow-right" onClick={clickNext}>
					<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="compilation__path" d="M7 1.5L4 4.5L1 1.5" stroke="#383634" strokeWidth="1.5" strokeLinecap="round" />
					</svg>
				</div>
			</div>
		</section>
	)
}