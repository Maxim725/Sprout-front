import React from 'react'
import searchIcon from '../../img/Search.svg'
export const Search = () => {
	return (
		<div className="header__search">
			<input className="header__search-input" type="text" placeholder="Search" alt="search" />
			<img className="header__search-icon" src={searchIcon} draggable="false" />
		</div>
	)
}