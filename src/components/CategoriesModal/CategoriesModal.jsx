import '../../styles/Categories.scss'
import React, { useRef, useState } from 'react'
import { CategoriesList } from './CategoriesList'
import { useCategory } from '../Context/CategoryContext'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useCategoriesModal } from '../Context/CategoriesModalContext'

export const CategoriesModal = () => {
	const [categories, setCategories] = useState(undefined)
	const [categoriesLoading, setCategoriesLoading] = useState(true)
	const { toggle, isOpen } = useCategoriesModal()
	const { getCategories } = useCategory()
	const clickRef = useRef()

	useClickOutside(clickRef, () => toggle(false))

	getCategories()
		.then(data => {
			setCategories(data)
			setCategoriesLoading(false)
		})

	return (
		<>
			{isOpen &&
				<div className="categories__bg">
					<div className="categories__centered">
						<div className="categories__triangle"></div>
						<div className="categories__main" ref={clickRef}>
							<h2 className="categories__main-header">Categories</h2>
							<ul className="categories__main-list">
								{categoriesLoading
									? null
									: <CategoriesList categories={categories} toggleModal={toggle} />
								}
							</ul>
						</div>
					</div>
				</div>}
		</>
	)
}