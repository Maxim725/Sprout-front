import React from 'react'
import '../../styles/Breadcrumbs.scss'
import { useBreadcrumbs } from '../Context/BreadCrumbsContext'

export const BreadCrumbs = () => {
	const { breadcrumbs } = useBreadcrumbs()

	const bradcrumbsItems = [
		{ title: 'Homepage', link: "/" },
		{ title: 'Dried fruits', link: "/catalog/0" }
	]

	console.log("Breadcumbs: ", breadcrumbs)
	return (
		<nav className="breadcrumbs">
			{breadcrumbs.map(el => <div className="breadcrumbs__item"><a className="breadcrumbs__link" href={el.link}>{el.title}</a></div>)}
		</nav>
	)
}