import React from 'react'
import DetailsMarker from '../../img/DetailsMarker.svg'
import { Accordion } from '../General/Accordion'
import { Checkbox } from '../General/Checkbox'

export const ShapeGoods = () => {
	return (
		<Accordion title="Form" height={67} visible={true} >
			<ul className="sidebar__filter-form-list">
				<li className="sidebar__filter-brand-list-item">
					<label>
						<Checkbox /><span>Prepackaged</span>
					</label>
				</li>
				<li className="sidebar__filter-brand-list-item">
					<label>
						<Checkbox /><span>On weight</span>
					</label>
				</li>
			</ul>
		</Accordion>
	)
}