import React from 'react'
import HamburgerIcon from '../../img/HamburgerMenu.svg'
export const HamburgerMenu = () => {
	return (
		<div className="header__hamburger-menu">
			<img className="header__hamburger-menu-icon" src={HamburgerIcon} draggable="false" />
		</div>
	)
}