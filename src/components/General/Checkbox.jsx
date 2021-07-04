import React, { useState } from 'react'
import '../../styles/Checkbox.scss'
import CheckMark from '../../img/CheckMark.svg'

export const Checkbox = ({ checked = false }) => {
	const [isCheck, setIsCheck] = useState(checked)

	return (
		<label className="checkbox">
			<input type="checkbox" value={isCheck} onChange={() => setIsCheck(!isCheck)} />
			<div className="checkbox__form">
				{isCheck ? <div className="checkbox__checked">
					<img src={CheckMark} alt="Check mark" />
				</div> : null}
			</div>
		</label>
	)
}