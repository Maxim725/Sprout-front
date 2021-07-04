import React from 'react'
import CookIcon from '../../img/CookIcon.svg'
import '../../styles/WhatToCook.scss'
import Watermelon from '../../img/Watermelon.png'
import Aspagarus from '../../img/Asparagus.png'
import ChildUpperImg from '../../img/ChildUpperImg.svg'

export const WhatToCook = () => {
	return (
		<div className="what-to-cook">
			<div className="what-to-cook__header-container">
				<img className="what-to-cook__header-icon" src={CookIcon} alt="cook icon" draggable="false" />
				<h3 className="what-to-cook__header">What to cook?</h3>
			</div>
			<div className="what-to-cook__banners">
				<div className="what-to-cook__banner">
					<div className="what-to-cook__banner-info">
						<h4 className="what-to-cook__banner-heading color-pink">Watermelon</h4>
						<p className="what-to-cook__banner-subheading">Recipes with Anna Grace</p>
						<img className="what-to-cook__banner-img" src={Watermelon} alt=" watermelon" draggable="false" />
						<button className="what-to-cook__banner-button wtk__b-pink">Read more</button>
						<div className="light__pink"></div>
					</div>
				</div>
				<div className="what-to-cook__banner">
					<div className="what-to-cook__banner-info">
						<h4 className="what-to-cook__banner-heading color-green">Aspagarus</h4>
						<p className="what-to-cook__banner-subheading">Recipes with Anna Grace</p>
						<img className="what-to-cook__banner-img size-half" src={Aspagarus} alt="watermelon" draggable="false" />
						<button className="what-to-cook__banner-button button__green wtk__b-green">Read more</button>
						<div className="light__green"></div>
					</div>
				</div>
				<div className="what-to-cook__banner">
					<div className="what-to-cook__banner-child child__upper">
						<div className="child__upper-info">
							<h4 className="child__upper-heading">200+</h4>
							<p className="child__upper-subheading">Healthy recipes</p>
							<button className="child__upper-button">View all</button>
						</div>
						<img className="child__upper-icon" src={ChildUpperImg} alt="icon" draggable="false" />
					</div>
					<div className="what-to-cook__banner-child child__bottom">
						<div className="child__bottom-info">
							<p className="child__bottom-text">Don’t miss the new posts</p>
							<input type="text" className="child__bottom-input" placeholder="Your email" />
							<button className="child__bottom-button">Subscribe now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}