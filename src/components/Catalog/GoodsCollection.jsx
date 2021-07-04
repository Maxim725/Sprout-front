import React, { useState } from 'react'
import { GoodsItem } from '../Homepage/GoodsItem'
import imgTemplate from '../../img/BlueBerry.png'

export const GoodsCollection = ({ products }) => {
	const ITEMS_ON_PAGE = 12
	const [pages, setPages] = useState(1)

	const pagination = (amountOfPages = 8) => {
		const newCollection = Object.keys(products)
		const collectionOfGoods = []

		for (let i = 0; i < amountOfPages && i < newCollection.length; i++) {
			collectionOfGoods.push(<GoodsItem {...products[newCollection[i]]} />)
		}

		return collectionOfGoods
	}

	const addPage = () => {
		setPages(pages + 1)
	}

	return (
		<>
			<div className="goods__collection">
				{pagination(pages * ITEMS_ON_PAGE)}
			</div>
			<div className="goods__button-container">
				<button className="goods__button" onClick={addPage}>
					<svg className="goods__button-img" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0)">
							<path d="M0.666992 2.66667V6.66667H4.66699" stroke="#383634" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M15.333 13.3333V9.33333H11.333" stroke="#383634" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M13.6603 5.99999C13.3222 5.04452 12.7476 4.19026 11.99 3.51694C11.2325 2.84362 10.3167 2.37317 9.32813 2.1495C8.33959 1.92583 7.31049 1.95622 6.33686 2.23784C5.36324 2.51947 4.47682 3.04314 3.76033 3.75999L0.666992 6.66666M15.3337 9.33333L12.2403 12.24C11.5238 12.9569 10.6374 13.4805 9.66379 13.7621C8.69016 14.0438 7.66106 14.0742 6.67252 13.8505C5.68397 13.6268 4.76819 13.1564 4.01064 12.483C3.25308 11.8097 2.67844 10.9555 2.34033 9.99999" stroke="#383634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</g>
						<defs>
							<clipPath id="clip0">
								<rect width="16" height="16" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<span className="goods__button-text">Load more</span>
				</button>
			</div>
		</>
	)
}