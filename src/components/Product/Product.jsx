import React, { useEffect, useState } from 'react'
import '../../styles/Product.scss'
import Sliva from '../../img/sliva-krasnaya-armeniya.png'
import ArrowLeft from '../../img/ArrowMiniLeft.svg'
import Kavichki from '../../img/Kavichki.svg'
import ScoreFilled from '../../img/ScoreFilled.svg'
import ScoreHollow from '../../img/ScoreHollow.svg'
import Stock from '../../img/Stock.svg'
import Add from '../../img/Add.svg'
import BlueBerry from '../../img/BlueBerry.png'
import { BreadCrumbs } from '../Catalog/Breadcrumbs'
import { GoodsItem } from '../Homepage/GoodsItem'
import { useHistory, useRouteMatch } from 'react-router'
import { useProduct } from '../Context/ProductContext'
import { CategoryData } from '../../data/CategoryData'
import { AddToCart } from './AddToCart'
import { useBreadcrumbs } from '../Context/BreadCrumbsContext'
import { useCategory } from '../Context/CategoryContext'
function GoBack({ history, title }) {
	return (
		<a className="product__link-back" onClick={history.goBack}>
			<img className="product__link-back-img" src={ArrowLeft} />
			<span className="product__link-back-text" >To {title}</span>
		</a>
	)
}

export const Product = () => {
	const match = useRouteMatch('/product/:id')
	const history = useHistory()
	const { id } = match.params
	const [goodsData, setGoodsData] = useState({})
	const { products } = useProduct()
	const [loadingData, setLoadingData] = useState(true)
	const [parentCategoty, setParentCategoty] = useState(null)
	const { breadcrumbs, pushItem, clearBreadcrumbs } = useBreadcrumbs()
	const { getCategory } = useCategory()

	useEffect(() => {
		console.log(products)
		if (id !== undefined && !isNaN(id)) {
			console.log("PRODUCT__P", products[id])
			setGoodsData(products[id])
			setLoadingData(false)

			//! бРАТЬ КАТЕГОРИЮ ИЗ СЕРВЕРНЫХ ДАННЫХ!!!
			const category = getCategory(products[id].categoriesId[0])

			category && setParentCategoty(category)
		}

		// else history.push('/not-found')

	}, [id])

	const recProducts = [
		{ id: 1, title: "Seedless red dried plums Royal edition", price: 2.80, raiting: 4.9, img: BlueBerry },
		{ id: 2, title: 'Fruits', price: 2.80, raiting: 4.9, img: BlueBerry, discount: 20 },
		{ id: 3, title: 'Fruits', price: 2.80, raiting: 4.9, img: BlueBerry, discount: 20 },
		{ id: 4, title: 'Fruits', price: 2.80, raiting: 4.9, img: BlueBerry, discount: 20 },
	]

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		if (breadcrumbs.length === 0 && parentCategoty != null) {
			pushItem({ title: "Homepage", link: "/" })
			pushItem({ title: parentCategoty.title, link: `/catalog/${parentCategoty.id}` })
			pushItem({ title: goodsData.title, link: `/product/${goodsData.id}` })
		}
		else if (breadcrumbs.length !== 0) {
			pushItem({ title: goodsData.title, link: `/product/${goodsData.id}` })
		}
	}, [parentCategoty])

	console.log("PRODUCT:::", goodsData.title)
	return (
		<div className="product">
			{loadingData ? "Loading" :
				<>
					<BreadCrumbs />
					<div className="product__container product__container2">
						<div className="product__section product__section-one">
							{parentCategoty && <GoBack title={parentCategoty.title} history={history} />}
						</div>
						<div className="product__section product__section-two">
							<div className="product__img-container">
								<img className="product__img" src={goodsData.img} alt="product img" />
							</div>
						</div>
						<div className="product__section product__section-three">
							<div className="product__comments">
								<div className="product__comments-heading-container">
									<h2 className="product__comments-heading">Customers review</h2>
									<div className="product__comments-scores">
										<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.1045 1.55165C10.4723 0.811771 11.5277 0.81177 11.8955 1.55165L14.243 6.27469C14.3891 6.56858 14.6701 6.77209 14.9948 6.81923L20.2347 7.57983C21.0567 7.69916 21.3833 8.71069 20.7863 9.28822L17.0052 12.9456C16.7673 13.1757 16.6587 13.5085 16.715 13.8346L17.6084 19.0073C17.7493 19.8233 16.894 20.4472 16.16 20.0638L11.4629 17.6107C11.1729 17.4593 10.8271 17.4593 10.5371 17.6107L5.83999 20.0638C5.10596 20.4472 4.25072 19.8233 4.39165 19.0073L5.28499 13.8346C5.3413 13.5085 5.23267 13.1757 4.99483 12.9456L1.21374 9.28822C0.616672 8.71069 0.943272 7.69916 1.76534 7.57983L7.00516 6.81923C7.32994 6.77209 7.61092 6.56858 7.75699 6.27469L10.1045 1.55165Z" fill="#4C7C7D" />
										</svg>
										<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.1045 1.55165C10.4723 0.811771 11.5277 0.81177 11.8955 1.55165L14.243 6.27469C14.3891 6.56858 14.6701 6.77209 14.9948 6.81923L20.2347 7.57983C21.0567 7.69916 21.3833 8.71069 20.7863 9.28822L17.0052 12.9456C16.7673 13.1757 16.6587 13.5085 16.715 13.8346L17.6084 19.0073C17.7493 19.8233 16.894 20.4472 16.16 20.0638L11.4629 17.6107C11.1729 17.4593 10.8271 17.4593 10.5371 17.6107L5.83999 20.0638C5.10596 20.4472 4.25072 19.8233 4.39165 19.0073L5.28499 13.8346C5.3413 13.5085 5.23267 13.1757 4.99483 12.9456L1.21374 9.28822C0.616672 8.71069 0.943272 7.69916 1.76534 7.57983L7.00516 6.81923C7.32994 6.77209 7.61092 6.56858 7.75699 6.27469L10.1045 1.55165Z" fill="#4C7C7D" />
										</svg>

										<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.1045 1.55165C10.4723 0.811771 11.5277 0.81177 11.8955 1.55165L14.243 6.27469C14.3891 6.56858 14.6701 6.77209 14.9948 6.81923L20.2347 7.57983C21.0567 7.69916 21.3833 8.71069 20.7863 9.28822L17.0052 12.9456C16.7673 13.1757 16.6587 13.5085 16.715 13.8346L17.6084 19.0073C17.7493 19.8233 16.894 20.4472 16.16 20.0638L11.4629 17.6107C11.1729 17.4593 10.8271 17.4593 10.5371 17.6107L5.83999 20.0638C5.10596 20.4472 4.25072 19.8233 4.39165 19.0073L5.28499 13.8346C5.3413 13.5085 5.23267 13.1757 4.99483 12.9456L1.21374 9.28822C0.616672 8.71069 0.943272 7.69916 1.76534 7.57983L7.00516 6.81923C7.32994 6.77209 7.61092 6.56858 7.75699 6.27469L10.1045 1.55165Z" fill="#4C7C7D" />
										</svg>
										<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.1045 1.55165C10.4723 0.811771 11.5277 0.81177 11.8955 1.55165L14.243 6.27469C14.3891 6.56858 14.6701 6.77209 14.9948 6.81923L20.2347 7.57983C21.0567 7.69916 21.3833 8.71069 20.7863 9.28822L17.0052 12.9456C16.7673 13.1757 16.6587 13.5085 16.715 13.8346L17.6084 19.0073C17.7493 19.8233 16.894 20.4472 16.16 20.0638L11.4629 17.6107C11.1729 17.4593 10.8271 17.4593 10.5371 17.6107L5.83999 20.0638C5.10596 20.4472 4.25072 19.8233 4.39165 19.0073L5.28499 13.8346C5.3413 13.5085 5.23267 13.1757 4.99483 12.9456L1.21374 9.28822C0.616672 8.71069 0.943272 7.69916 1.76534 7.57983L7.00516 6.81923C7.32994 6.77209 7.61092 6.56858 7.75699 6.27469L10.1045 1.55165Z" fill="#4C7C7D" />
										</svg>
										<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.1045 1.55165C10.4723 0.811771 11.5277 0.81177 11.8955 1.55165L14.243 6.27469C14.3891 6.56858 14.6701 6.77209 14.9948 6.81923L20.2347 7.57983C21.0567 7.69916 21.3833 8.71069 20.7863 9.28822L17.0052 12.9456C16.7673 13.1757 16.6587 13.5085 16.715 13.8346L17.6084 19.0073C17.7493 19.8233 16.894 20.4472 16.16 20.0638L11.4629 17.6107C11.1729 17.4593 10.8271 17.4593 10.5371 17.6107L5.83999 20.0638C5.10596 20.4472 4.25072 19.8233 4.39165 19.0073L5.28499 13.8346C5.3413 13.5085 5.23267 13.1757 4.99483 12.9456L1.21374 9.28822C0.616672 8.71069 0.943272 7.69916 1.76534 7.57983L7.00516 6.81923C7.32994 6.77209 7.61092 6.56858 7.75699 6.27469L10.1045 1.55165Z" fill="#4C7C7D" />
										</svg>
										<spam className="product__comments-scores-avg">5.0/5</spam>
										<span className="product__comments-scores-avg-amount">(9 reviews)</span>
									</div>
								</div>
								<ul className="product__comments-list">
									<li className="product__comments-item">
										<h3 className="product__comments-item-heading">Alexander</h3>
										<p className="product__comments-item-review">This apricots are very beautiful to look at and quite appetizing.</p>
										<div className="product__comments-item-bottom">
											<p className="product__comments-item-date">February 10, 2021</p>
											<div className="product__comments-item-score">
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreHollow} alt="score hollow" />
											</div>
										</div>
										<img className="product__comments-item-icon" src={Kavichki} alt="кавычки" />
									</li>
									<li className="product__comments-item">
										<h3 className="product__comments-item-heading">Alexander</h3>
										<p className="product__comments-item-review">I eat it instead of candy, add it to yogurt and porridge! Very healthy and tasty!</p>
										<div className="product__comments-item-bottom">
											<p className="product__comments-item-date">February 10, 2021</p>
											<div className="product__comments-item-score">
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreHollow} alt="score hollow" />
											</div>
										</div>
										<img className="product__comments-item-icon" src={Kavichki} alt="кавычки" />
									</li>
									<li className="product__comments-item">
										<h3 className="product__comments-item-heading">Alexander</h3>
										<p className="product__comments-item-review">This apricots are very beautiful to look at and quite appetizing.</p>
										<div className="product__comments-item-bottom">
											<p className="product__comments-item-date">February 10, 2021</p>
											<div className="product__comments-item-score">
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreFilled} alt="score filled" />
												<img src={ScoreHollow} alt="score hollow" />
											</div>
										</div>
										<img className="product__comments-item-icon" src={Kavichki} alt="кавычки" />
									</li>
									<div className="product__comments-fade"></div>
									<div className="product__comments-button-container">
										<button className="product__comments-button">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clip-path="url(#clip0)">
													<path d="M0.666992 2.66667V6.66667H4.66699" stroke="#383634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
													<path d="M15.333 13.3333V9.33333H11.333" stroke="#383634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
													<path d="M13.6603 5.99999C13.3222 5.04452 12.7476 4.19026 11.99 3.51694C11.2325 2.84362 10.3167 2.37317 9.32813 2.1495C8.33959 1.92583 7.31049 1.95622 6.33686 2.23784C5.36324 2.51947 4.47682 3.04314 3.76033 3.75999L0.666992 6.66666M15.3337 9.33333L12.2403 12.24C11.5238 12.9569 10.6374 13.4805 9.66379 13.7621C8.69016 14.0438 7.66106 14.0742 6.67252 13.8505C5.68397 13.6268 4.76819 13.1564 4.01064 12.483C3.25308 11.8097 2.67844 10.9555 2.34033 9.99999" stroke="#383634" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
												</g>
												<defs>
													<clipPath id="clip0">
														<rect width="16" height="16" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<span>Show all</span>
										</button>
									</div>
								</ul>
							</div>
						</div>
						<div className="product__section product__section-four">
							<h1 className="product__header">{goodsData.title}</h1>
						</div>
						<div className="product__section product__section-five">
							<div className="product__subheader">
								<div className="product__subheader-stock">
									<span>In stock</span> <img src={Stock} alt="stock" />
								</div>
								<p className="product__subheader-delivery">Delivery: 1–3 business days</p>
							</div>
						</div>
						<div className="product__section product__section-six">
							<div className="product__info">
								<div className="product__info-item">
									<p className="product__info-item-heading">Composition:</p>
									<p className="product__info-item-subheading">Natural apricot</p>
								</div>
								<div className="product__info-item">
									<p className="product__info-item-heading">Country:</p>
									<p className="product__info-item-subheading">Turkey</p>
								</div>
								<div className="product__info-item">
									<p className="product__info-item-heading">Brand:</p>
									<p className="product__info-item-subheading">Jumbo</p>
								</div>
							</div>
						</div>
						<div className="product__section product__section-seven">
							<AddToCart id={id} volume={goodsData.volume} price={goodsData.price} />
						</div>
						<div className="product__section product__section-eight">
							<div className="product__description">
								<h3 className="product__description-header">Description:</h3>
								<p className="product__description-texts">
									<p className="product__description-text">Dried apricots are an important source of carotenoids (vitamin A) and potassium. Because of their high fiber-to-volume ratio, they are sometimes used to relieve constipation.</p>
									<p className="product__description-text">Fibre in apricots normalizes the gastrointestinal tract, saves from constipation, promotes the removal of toxins and impurities, cleaning the liver.</p>
									<p className="product__description-text">Dried apricots normally do not have any sugar added and have a low glycemic index. The maximum moisture rate allowed in Turkey is 25%.</p>
								</p>
							</div>
						</div>
						<div className="product__section product__section-nine">
							<div className="product__vitamins">
								<div className="product__vitamin">
									<svg className="product__vitamin-img" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="40" height="40" rx="10" fill="#62BEBE" />
									</svg>
									<span className="product__vitamin-text">B1</span>
								</div>
								<div className="product__vitamin">
									<svg className="product__vitamin-img" width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.27208 8.72792C14.575 3.425 17.2265 0.773539 20.4357 0.265252C21.4721 0.101097 22.5279 0.101097 23.5643 0.265252C26.7735 0.773539 29.425 3.425 34.7279 8.72792C40.0308 14.0308 42.6823 16.6823 43.1906 19.8915C43.3547 20.9279 43.3547 21.9838 43.1906 23.0202C42.6823 26.2294 40.0308 28.8808 34.7279 34.1838C29.425 39.4867 26.7735 42.1382 23.5643 42.6464C22.5279 42.8106 21.4721 42.8106 20.4357 42.6464C17.2265 42.1382 14.575 39.4867 9.27208 34.1838C3.96916 28.8808 1.3177 26.2294 0.809408 23.0202C0.645251 21.9838 0.645251 20.9279 0.809408 19.8915C1.31769 16.6823 3.96916 14.0308 9.27208 8.72792Z" fill="#8CC183" />
									</svg>
									<span className="product__vitamin-text">B2</span>
								</div>
								<div className="product__vitamin">
									<svg className="product__vitamin-img" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="40" height="40" rx="19" fill="#DE927A" />
									</svg>
									<span className="product__vitamin-text">C</span>
								</div>
							</div>

						</div>
						<div className="product__section product__section-ten">
							<div className="product__accordeons">
								<div className="product__accordeon">
									<div className="product__accordeon-header-container">
										<h4 className="product__accordeon-header">Nutritional value:</h4>
										<img className="product__accordeon-img" src={ArrowLeft} style={{ transform: 'rotateZ(-90deg)' }} />
									</div>
									<div className="product__accordeon-content"></div>
								</div>
								<div className="product__accordeon">
									<div className="product__accordeon-header-container">
										<h4 className="product__accordeon-header">Vitamins</h4>
										<img className="product__accordeon-img" src={ArrowLeft} style={{ transform: 'rotateZ(-90deg)' }} />
									</div>
									<div className="product__accordeon-content"></div>
								</div>
								<div className="product__accordeon">
									<div className="product__accordeon-header-container">
										<h4 className="product__accordeon-header">Minerals</h4>
										<img className="product__accordeon-img" src={ArrowLeft} style={{ transform: 'rotateZ(-90deg)' }} />
									</div>
									<div className="product__accordeon-content"></div>
								</div>
							</div>

						</div>
					</div>
					{/* <div className="product__recommended">
						<h2 className="product__recommended-header">People also like</h2>
						<ul className="product__recommended-list">
							{recProducts.map((el, i) => <GoodsItem {...el} />)}
						</ul>
					</div> */}
				</>
			}
		</div >
	)
}
