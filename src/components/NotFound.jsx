import React from 'react'
import Four from '../img/4.svg'
import Tomat from '../img/Tomat.svg'
import '../styles/NotFound.scss'

export const NotFound = () => {
	return (
		<div className="not-found__container">
			<h1 className="not-found__header">Oops, this page couldn’t be found</h1>
			<div className="not-found__img-container">
				<img src={Four} className="not-found__img" draggable="false" alt="Four" />
				<img src={Tomat} className="not-found__img not-found__icon" draggable="false" alt="Tomato" />
				<img src={Four} className="not-found__img" draggable="false" alt="Four" />
			</div>
			<div className="not-found__button-container">
				<button className="not-found__button-home">Go to homepage</button>
				<button className="not-found__button-report">Report a bug</button>
			</div>
		</div>
	)
}