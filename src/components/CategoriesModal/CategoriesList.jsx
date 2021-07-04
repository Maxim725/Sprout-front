import React from 'react'
import { CategoryItem } from './CategoryItem'

export const CategoriesList = ({ categories, toggleModal }) => {
	return (
		<>
			{
				Object.values(categories).map((el) => {
					return <CategoryItem id={el.id} title={el.title} key={el.id} toggleModal={toggleModal} />
				})
			}
		</>
	)
}