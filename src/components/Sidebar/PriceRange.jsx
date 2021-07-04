import React, { useEffect, useState } from 'react'
import DetailsMarker from '../../img/DetailsMarker.svg'
import '../../styles/PriceRange.scss'

import { Accordion } from '../General/Accordion'
import { DoublePriceRange } from '../General/DoublePriceRange'

export const PriceRange = ({ filter }) => {
	const [leftValue, setLeftValue] = useState(0)
	const [rightValue, setRightValue] = useState(256)
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {

	}, [rightValue, leftValue])
	return (
		<Accordion title="Price" height={115} visible={true}>
			<div className="price-range__content">
				<div className="price-range__edge-values">
					<p className="price-range__values-min">0</p>
					<p className="price-range__values-max">120</p>
				</div>
				<div className="price-range__container">
					<DoublePriceRange min={leftValue} max={rightValue} width={270} height={6} setMin={setLeftValue} setMax={setRightValue} />
				</div>
				<div className="price-range__values">
					<p className="price-range__values-text">From:</p>
					<div className="price-range__value">$ {leftValue}</div>
					<p className="price-range__values-text">To:</p>
					<div className="price-range__value">$ {rightValue}</div>
				</div>
			</div>
		</Accordion>
	)
}