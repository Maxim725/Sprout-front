import React from 'react'
import DetailsMarker from '../../img/DetailsMarker.svg'
import SearchIcon from '../../img/Search.svg'
import { Accordion } from '../General/Accordion'
import { Checkbox } from '../General/Checkbox'

export const Brand = () => {

	const brands = [
		'Artisana',
		'Barney',
		'Betty Lou’s',
		'Dastony',
		'Gopal’s',
		'Mighty Sesame',
		'Mighty Sesame',
	]
	return (
		<Accordion title="Brand" visible={true} height={196}>
			<ul className="sidebar__filter-brand-list">
				{brands.map((el, i) =>
					<li key={i} className="sidebar__filter-brand-list-item">
						<label>
							<Checkbox />
							<span>{el}</span>
						</label>
					</li>)}
			</ul>
		</Accordion>
	)
}