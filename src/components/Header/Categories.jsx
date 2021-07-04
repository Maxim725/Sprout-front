import React from 'react'
import categories from '../../img/Categories.svg'

import { useCategoriesModal } from '../Context/CategoriesModalContext'

export const Categories = () => {
	const { toggle, isOpen } = useCategoriesModal()
	return (
		<div className="header__categories" onClick={() => toggle(!isOpen)}>
			<img className="header__categories-icon" src={categories} alt="categories" draggable="false" />
			<strong className="header__categories-text">Categories</strong>
		</div>
	)
}