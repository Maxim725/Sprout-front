import React, { useState } from 'react'

export const DoublePriceRange = ({ max = 100, width = 300, height = 6, setMin, setMax, }) => {
	const HALF_WIDTH_THUMB = -8

	const [isMousePressed, setIsMousePressed] = useState(false)
	const [showThumbOneValue, setShowThumbOneValue] = useState(false)
	const [showThumbTwoValue, setShowThumbTwoValue] = useState(false)
	const [posLeftThumb, setPosLeftThumb] = useState(0)
	const [posRightThumb, setPosRightThumb] = useState(100)

	const FindNearestThumb = (coordinate) => {

		if (coordinate - posLeftThumb > posRightThumb - coordinate) {
			return true // ближе к правому числу
		}
		else {
			return false
		}
	}

	const normalizedf = (e, shift) => {
		const x = (e.pageX - e.target.parentElement.parentElement.offsetLeft - shift) / (width / 100)
		const normalized = x > 100 ? 100 : x < 0 ? 0 : x

		return normalized
	}

	const thumbMove = (e) => {

		let normalized
		if (isMousePressed) {
			switch (e.target.id) {
				case "price-range":
					const x2 = (e.pageX - e.target.parentElement.offsetLeft - HALF_WIDTH_THUMB) / (width / 100)
					const normalized2 = x2 > 100 ? 100 : x2 < 0 ? 0 : x2;
					if (FindNearestThumb(normalized2)) {
						setPosRightThumb(normalized2)
						// setMax((posRightThumb * max / 100).toFixed(0))
						setShowThumbTwoValue(true)
					}
					else {
						setPosLeftThumb(normalized2)
						setShowThumbOneValue(true)
					}
					break
				case "thumb__left":
					normalized = normalizedf(e, 8)
					if (normalized < posRightThumb) {
						setPosLeftThumb(normalized)
						setShowThumbOneValue(true)
					}
					break
				case "thumb__right":
					normalized = normalizedf(e, -8)
					if (normalized > posLeftThumb) {
						setPosRightThumb(normalized)
						// setMax((posRightThumb * max / 100).toFixed(0))
						setShowThumbTwoValue(true)
					}

					break
				default:
					break
			}
		}
	}



	const clickThumb = (e) => {
		if (e.target.id == "price-range") {
			const x = (e.pageX - e.target.parentElement.offsetLeft - HALF_WIDTH_THUMB) / (width / 100)
			const normalized = Normalization(x)

			if (FindNearestThumb(normalized)) {
				setPosRightThumb(normalized)
				// setMax((posRightThumb * max / 100).toFixed(0))
				setShowThumbTwoValue(true)
			}
			else {
				setPosLeftThumb(normalized)
				setShowThumbOneValue(true)
			}

			console.log(x, normalized)
			console.log("case: pr СУКАы")
		}
	}

	const Normalization = (value) => {
		return value > 100 ? 100 : value < 0 ? 0 : value
	}



	return (
		<div className="price-range" style={{ width: width + "px", height: height + "px" }}>
			<div className="price-range__hueta" id="price-range"
				onMouseMove={thumbMove}
				onMouseDown={(e) => { e.preventDefault(); setIsMousePressed(true); clickThumb(e) }}
				onMouseUp={(e) => { e.preventDefault(); setIsMousePressed(false); setShowThumbTwoValue(false); setShowThumbOneValue(false) }}
				onMouseLeave={() => { setIsMousePressed(false); setShowThumbTwoValue(false); setShowThumbOneValue(false) }}
			>
				<div className="price-range__track" style={{ width: width + "px" }}></div>
				<div className="price-range__filled-line"
					style={{
						left: `calc(${posLeftThumb}%)`,
						width: (posRightThumb - posLeftThumb) + "%"
					}}></div>
				<div className="price-range__thumb" id="thumb__left" style={{ left: posLeftThumb + "%" }}></div>
				<div className="price-range__thumb" id="thumb__right" style={{ left: `calc(${posRightThumb}%)` }}></div>
			</div>
			<div className="price-range__show-thumb-value" style={
				showThumbOneValue ? { left: `calc(${posLeftThumb}% - 5px)`, backgroundColor: "red" } :
					showThumbTwoValue ? { left: `calc(${posRightThumb}% - 5px)`, backgroundColor: "aqua" } : {
						display: "none"
					}
			}>
				{/* Проценты {showThumbOneValue ? posLeftThumb.toFixed(0) : showThumbTwoValue ? posRightThumb.toFixed(0) : 0} */}
				{showThumbOneValue ? ((posLeftThumb * max / 100) /*+ min*/).toFixed(0) : showThumbTwoValue ? (posRightThumb * max / 100).toFixed(0) : 0}
			</div>
		</div>
	)
}