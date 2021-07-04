import React from 'react'
import BonusIcon from '../../img/BonusIcon.svg'
import '../../styles/Bonus.scss'

export const Bonus = () => {
	return (
		<div className="bonus">
			<div className="bonus__header-container">
				<img className="bonus__header-icon" src={BonusIcon} alt="cook icon" draggable="false" />
				<h3 className="bonus__header-text">Bonus</h3>
			</div>
			<div className="bonus__container">
				<div className="bonus__banner">
					<div className="bonus__banner-interactive">
						<div className="bonus__banner-infographic">
							<div className="bonus__banner-graphic">
								<div className="bonus__banner-graphic-cover">
									<p className="bonus__banner-graphic-percent">5%</p>
								</div>
								<svg width="166" height="166" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.2" d="M8.6 83C5.5072 83 2.97958 80.4893 3.19579 77.4041C4.5394 58.2316 12.753 40.1099 26.4315 26.4315C40.1099 12.753 58.2316 4.5394 77.4041 3.19579C80.4894 2.97958 83 5.5072 83 8.6C83 11.6928 80.4883 14.1763 77.4057 14.4276C61.207 15.7486 45.9284 22.7737 34.3511 34.351C22.7737 45.9284 15.7486 61.207 14.4276 77.4057C14.1763 80.4883 11.6928 83 8.6 83Z" fill="#E45959" stroke="white" strokeWidth="6" />
									<path opacity="0.2" d="M157.4 83C160.493 83 163.02 85.5106 162.804 88.5959C161.461 107.768 153.247 125.89 139.569 139.569C125.89 153.247 107.768 161.461 88.5959 162.804C85.5107 163.02 83 160.493 83 157.4C83 154.307 85.5118 151.824 88.5943 151.572C104.793 150.251 120.072 143.226 131.649 131.649C143.226 120.072 150.251 104.793 151.572 88.5943C151.824 85.5117 154.307 83 157.4 83Z" fill="#E45959" stroke="white" strokeWidth="6" />
									<path d="M83 8.6C83 5.5072 85.5106 2.97958 88.5959 3.19579C107.768 4.5394 125.89 12.753 139.569 26.4314C153.247 40.1099 161.461 58.2316 162.804 77.4041C163.02 80.4893 160.493 83 157.4 83C154.307 83 151.824 80.4882 151.572 77.4057C150.251 61.207 143.226 45.9284 131.649 34.351C120.072 22.7737 104.793 15.7486 88.5943 14.4276C85.5117 14.1763 83 11.6928 83 8.6Z" fill="#E45959" stroke="white" strokeWidth="6" />
									<path opacity="0.2" d="M83 157.4C83 160.493 80.4893 163.02 77.4041 162.804C58.2316 161.461 40.1099 153.247 26.4315 139.569C12.753 125.89 4.53942 107.768 3.19579 88.5959C2.97958 85.5107 5.5072 83 8.6 83C11.6928 83 14.1763 85.5118 14.4277 88.5943C15.7486 104.793 22.7737 120.072 34.3511 131.649C45.9284 143.226 61.207 150.251 77.4057 151.572C80.4883 151.824 83 154.307 83 157.4Z" fill="#E45959" stroke="white" strokeWidth="6" />
									<circle cx="83" cy="83" r="60" fill="url(#paint0_linear)" />
									<defs>
										<linearGradient id="paint0_linear" x1="145.765" y1="63" x2="-134.968" y2="256.442" gradientUnits="userSpaceOnUse">
											<stop stopColor="#E45959" />
											<stop offset="1" stopColor="#F6AEAE" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div className="bonus__banner-graphic-info">
								<div className="bonus__info-level"><span>Level:</span><span>1</span></div>
								<div className="bonus__info-requirements"><span>Not enough to 10%:</span><span>$76</span></div>
							</div>
						</div>
						<div style={{ width: '100%', height: '100px', opacity: 0 }}>
							<input type="range" />
						</div>
					</div>
				</div>
				<div className="bonus__banner">
					<div className="bonus__banner-benefit-container">
						<h4 className="bonus__banner-benefit-heading">Accumulative system of discounts for regular customers!</h4>
						<p className="bonus__banner-benefit-text">Our online store has an accumulation system of discounts for regular customers. Sign up and earn discount levels
							as your total purchases increase. </p>
						<button className="bonus__banner-benefit-button">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	)
}