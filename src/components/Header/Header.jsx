import React from 'react'
import logo from '../../img/Logo.svg'
import { Categories } from './Categories'
import { Search } from './Search'
import { Cart } from './Cart'
import { Account } from './Account'
import { Discount } from './Discount'
import { HamburgerMenu } from './HamburgerMenu'
import '../../styles/Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header className="header">
			<div className="header__left-container">
				<Link to="/">
					<img className="header__logo" src={logo} draggable="false" />
				</Link>
				<Search />
				<Categories />
			</div>
			<div className="header__right-container">
				<Discount />
				<Account />
				<Cart />
				<HamburgerMenu />
			</div>
		</header>
	)
}