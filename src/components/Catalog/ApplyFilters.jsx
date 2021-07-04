import React from 'react'
import Delete from '../../img/Delete.svg'

export const ApplyFilters = () => {
	const filters = [
		{ title: 'Price', info: '$0-$20' },
		{ title: 'Form', info: 'On weight' },
	]
	return (
		<div className="goods__apply-filters">
			{filters.map((el, i) => {
				return (
					<button className="goods__apply-filter">
						<span className="goods__apply-filter-title">{el.title}:</span>
						<span className="goods__apply-filter-text">{el.info}</span>
						<img className="goods__apply-filter-delete" src={Delete} />
					</button>
				)
			})}
			<button className="goods__apply-filter-clear" href="#">Clear all filters</button>
		</div>
	)
}