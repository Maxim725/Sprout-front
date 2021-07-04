import React from 'react'
import { GoodsHeader } from './GoodsHeader'
import { GoodsCollection } from './GoodsCollection'
import '../../styles/Goods.scss'

export const Goods = ({ products }) => {
	return (
		<div className="goods">
			<GoodsHeader />
			<GoodsCollection products={products} />
		</div>
	)
}