import React from 'react'
import { Brand } from './Brand'
import { Country } from './Country'
import { OtherItems } from './OtherItems'
import { PriceRange } from './PriceRange'
import { ShapeGoods } from './ShapeGoods'
import { SpecialFeatures } from './SpecialFeatures'
import { Volume } from './Volume'
import '../../styles/Sidebar.scss'

import { Accordion } from '../General/Accordion'

export const Sidebar = ({ actions }) => {
	const { priceRangeFiltered, countryFiltered, formFiltered, volumeFiltered } = actions;
	return (
		<aside className="sidebar">
			<h2 className="sidebar__filter-header">Filter</h2>
			<div className="sidebar__filter">
				<PriceRange filter={priceRangeFiltered} />
				<Brand filter={countryFiltered} />
				<ShapeGoods filter={formFiltered} />
				<Volume filter={volumeFiltered} />
				<SpecialFeatures />
				<OtherItems />
				<Country />
			</div>
		</aside>
	)
}