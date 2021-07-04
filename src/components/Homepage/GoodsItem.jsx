import React from 'react'
import RaitingStar from '../../img/RaitingStar.svg'
import Add from '../../img/Add.svg'
import { Link } from 'react-router-dom'
import { useEventsCart } from '../Context/CartContext'
import { useAuth } from '../Context/AuthContext'
export const GoodsItem = ({ id, title, price, raiting, img, discount, style, ...restProps }) => {
	const { addToCart, isAdded } = useEventsCart()
	const MAX_RAITING = 5
	const MONEY_TYPE = '$'
	const { authorizedArea } = useAuth()

	const isSale = () => {
		if (discount) {
			return <div className="goods__item-sale">on sale</div>
		}
	}

	const renderCost = () => {
		if (discount) {
			return <>
				<div className="goods__item-price-old">{MONEY_TYPE}{price.toPrecision(3)}</div>
				<div className="goods__item-price-new">{MONEY_TYPE}{(price - (price * +discount / 100)).toPrecision(3)}</div>
			</>
		}
		else {
			return <div className="goods__item-price-new" style={{ color: '#383634' }}>{MONEY_TYPE}{price.toPrecision(3)}</div>
		}
	}

	const addToCartLocal = (e) => {
		e.preventDefault()
		authorizedArea(() => {
			addToCart(id, 1)
		})
	}

	return (
		<Link to={`/product/${id}`} className="goods__item" style={style}>
			<article className="goods__item">
				<div className="goods__item-space"></div>
				<img className="goods__item-img" src={img} alt="goods item" draggable="false" />
				<div className="goods__item-info">
					<div className="goods__item-info-upper">
						<div className="goods__item-raiting">
							<img className="goods__item-raiting-icon" src={RaitingStar} alt="raiting star" />
							<span>{raiting.toPrecision(2)}/{MAX_RAITING}</span>
						</div>
						{isSale()}
					</div>
					<div className="goods__item-info-bottom">
						<h4 className="goods__item-title">{title}</h4>
						<div>
							{
								isAdded(id)
									?
									<button className="goods__item-button goods__item-button-unactive" onClick={(e) => { e.preventDefault() }}>
										<span className="goods__item-button-text">Added</span>
										<img src={Add} alt="add icon" />
									</button>
									:
									<button className="goods__item-button" onClick={addToCartLocal}>
										<span className="goods__item-button-text">Add</span>
										<img src={Add} alt="add icon" />
									</button>
							}
							<div className="goods__item-pw-container">
								{renderCost()}
								<div className="goods__item-weight">/500g</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</Link>
	)
}