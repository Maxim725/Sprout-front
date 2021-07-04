import React from 'react'
import BriefcaseIcon from '../../img/how-we-work/Briefcase.svg'
import Gathering from '../../img/how-we-work/Gathering.svg'
import Transportation from '../../img/how-we-work/Transportation.svg'
import Packaging from '../../img/how-we-work/Packaging.svg'
import Delivery from '../../img/how-we-work/Delivery.svg'
import ChainFirst from '../../img/how-we-work/Chain_1.svg'
import ChainSecond from '../../img/how-we-work/Chain_2.svg'
import ChainThird from '../../img/how-we-work/Chain_3.svg'
import '../../styles/HowWeWork.scss'

export const HowWeWork = () =>
	<div className="how-we-work">
		<div className="how-we-work__header-container">
			<img className="how-we-work__header-icon" src={BriefcaseIcon} alt="cook icon" draggable="false" />
			<h3 className="how-we-work__header-text">How we work</h3>
		</div>
		<div className="how-we-work__chain">

			<div className="how-we-work__chain-item" style={{ alignSelf: 'flex-end', paddingBottom: '10px' }} >
				<img className="how-we-work__chain-item-img" src={Gathering} alt="" draggable="false" />
				<div className="how-we-work__chain-item-info">
					<h4 className="how-we-work__chain-item-heading">Gathering</h4>
					<p className="how-we-work__chain-item-text">Picking fresh plants from all over the world</p>
				</div>
			</div>
			<img className="how-we-work__chain-arrow" style={{ bottom: '3%', left: '20%' }} src={ChainFirst} alt="" draggable="false" />

			<div className="how-we-work__chain-item" style={{ alignSelf: 'flex-start', paddingTop: '21px' }}>
				<img className="how-we-work__chain-item-img" src={Transportation} alt="" draggable="false" />
				<div className="how-we-work__chain-item-info">
					<h4 className="how-we-work__chain-item-heading">Transportation</h4>
					<p className="how-we-work__chain-item-text">Select the best
					and transport it to our bases</p>
				</div>
			</div>
			<img className="how-we-work__chain-arrow" style={{ top: 0, left: '45%' }} src={ChainSecond} alt="" draggable="false" />

			<div className="how-we-work__chain-item" style={{ alignSelf: 'flex-end' }}>
				<img className="how-we-work__chain-item-img" src={Packaging} alt="" draggable="false" />
				<div className="how-we-work__chain-item-info">
					<h4 className="how-we-work__chain-item-heading">Packaging</h4>
					<p className="how-we-work__chain-item-text">Carefully pack your order in ecological packaging</p>
				</div>
			</div>
			<img className="how-we-work__chain-arrow" style={{ bottom: '-1%', left: '70%' }} src={ChainThird} alt="" draggable="false" />

			<div className="how-we-work__chain-item" style={{ alignSelf: 'flex-start' }}>
				<img className="how-we-work__chain-item-img" src={Delivery} alt="" draggable="false" />
				<div className="how-we-work__chain-item-info">
					<h4 className="how-we-work__chain-item-heading">Delivery</h4>
					<p className="how-we-work__chain-item-text">We can deliver any products within five business days</p>
				</div>
			</div>

		</div>
	</div>