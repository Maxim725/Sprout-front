import React, { useState, useEffect } from 'react'

const styleDisabled = {
	pointerEvents: "none",
	color: "#4c7c7d",
	border: "1px solid #4c7c7d",
	backgroundColor: "rgba(0,0,0,0)"
}


export const ButtonAddToCart = ({ addItem, isAdded }) => {
	return (
		<>
			{
				isAdded
					?
					<button className="product__add-cart-button" style={styleDisabled}>
						<span>Added</span>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path style={{ fill: "#4c7c7d" }} d="M7.75 1C7.75 0.585786 7.41421 0.25 7 0.25C6.58579 0.25 6.25 0.585786 6.25 1H7.75ZM6.25 13C6.25 13.4142 6.58579 13.75 7 13.75C7.41421 13.75 7.75 13.4142 7.75 13H6.25ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM13 7.75C13.4142 7.75 13.75 7.41421 13.75 7C13.75 6.58579 13.4142 6.25 13 6.25V7.75ZM6.25 1V13H7.75V1H6.25ZM1 7.75H13V6.25H1V7.75Z" fill="#383634" />
						</svg>
					</button>
					:
					<button className="product__add-cart-button" onClick={addItem}>
						<span>Add to cart</span>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.75 1C7.75 0.585786 7.41421 0.25 7 0.25C6.58579 0.25 6.25 0.585786 6.25 1H7.75ZM6.25 13C6.25 13.4142 6.58579 13.75 7 13.75C7.41421 13.75 7.75 13.4142 7.75 13H6.25ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM13 7.75C13.4142 7.75 13.75 7.41421 13.75 7C13.75 6.58579 13.4142 6.25 13 6.25V7.75ZM6.25 1V13H7.75V1H6.25ZM1 7.75H13V6.25H1V7.75Z" fill="#383634" />
						</svg>
					</button>
			}
		</>
	)
}