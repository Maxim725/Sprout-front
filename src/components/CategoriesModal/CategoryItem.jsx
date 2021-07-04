import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryItem = ({ id, title, toggleModal }) => {
	return (
		<Link to={`/catalog/${id}`} style={{ color: "#383634" }} onClick={() => { toggleModal(false) }}>
			<li className="categories__main-item">
				<h3 className="categories__main-heading">{title}</h3>
			</li>
		</Link>
	)
}