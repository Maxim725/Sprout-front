import React, { useState } from 'react'
import '../../styles/Accordion.scss'
import DetailsMarker from '../../img/DetailsMarker.svg'

export const Accordion = ({ title, height = 480, visible = false, children }) => {
	const [isVisible, setIsVisible] = useState(visible)
	return (
		<section className="accordion" style={isVisible ? { paddingBottom: "32px", paddingTop: "32px" } : { paddingBottom: "16px", paddingTop: "16px" }}>
			<div className="accordion__heading" onClick={() => setIsVisible(!isVisible)}>
				<div className="accordion__container">
					<h3 className="accordion__heading">{title}</h3>
					<img className="accordion__details-icon" alt="price icon" src={DetailsMarker} style={isVisible ? { transform: "rotateZ(180deg)" } : {}} />
				</div>
			</div>
			<div className={(isVisible === true ? "show" : "") + " accordion__content"} style={isVisible === true ? { height: `${height}px` } : {}}>
				{children}
			</div>
		</section>
	)
}