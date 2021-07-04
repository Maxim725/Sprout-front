import React from 'react'
import { BreadCrumbs } from './Breadcrumbs'
import { ApplyFilters } from './ApplyFilters'

export const GoodsHeader = () => {
	const name = 'Dried fruits'
	const amountGoods = 86
	return (
		<div className="goods__info">
			<BreadCrumbs />
			<h1 className="goods__header">{name}</h1>
			<div className="goods__info-additional">
				<p className="goods__info-additional-text">Showed {amountGoods} goods</p>
				<div className="goods__info-additional-sort">
					<span className="goods__info-additional-text-mini">Sort by:</span>
					<select className="goods__info-additional-select">
						<option className="goods__info-additional-item">Relevancy</option>
						<option>Ascending</option>
						<option>Descending</option>
					</select>
				</div>
			</div>
			<ApplyFilters />
		</div>
	)
}