import React from 'react'
import DetailsMarker from '../../img/DetailsMarker.svg'
import { Accordion } from '../General/Accordion'
import { Checkbox } from '../General/Checkbox'

export const Volume = () => {
	const rangeWeight = {
		0: { type: 'all', weights: ['No matter'] },
		1: { type: 'less', weights: ['10g'], count: 2 },
		2: { type: 'between', weights: ['10g', '60g'], count: 6 },
		3: { type: 'between', weights: ['60g', '200g'], count: 9 },
		4: { type: 'greater', weights: ['200g'], count: 22 },
	}
	return (
		<Accordion title="Volume" height={178} visible={true}>
			<ul className="sidebar__filter-volume-list">
				{Object.values(rangeWeight).map((el, i) => {
					//TODO надо инкапсулировать switch в отдельный метод
					switch (el.type) {
						case 'all':
							return (
								<li key={i} className="sidebar__filter-volume-item">
									<label>
										<Checkbox />
										<span>{el.weights[0]}</span>
									</label>
								</li>
							)
						case 'less':
							return (
								<li key={i} className="sidebar__filter-volume-item">
									<label>
										<Checkbox />
										<span>&lt;&nbsp;{el.weights[0]}
											<span>({el.count})</span>
										</span>
									</label>
								</li>
							)
						case 'between':
							return (
								<li key={i} className="sidebar__filter-volume-item">
									<label>
										<Checkbox />
										<span>{el.weights[0]} - {el.weights[1]}
											<span>({el.count})</span>
										</span>
									</label>
								</li>
							)
						case 'greater':
							return (
								<li key={i} className="sidebar__filter-volume-item">
									<label>
										<Checkbox />
										<span>{el.weights[0]}&nbsp;&gt;
											<span>({el.count})</span>
										</span>
									</label>
								</li>
							)
					}
				})}
			</ul>
		</Accordion>
	)
}