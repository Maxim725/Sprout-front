import React from 'react'
import Logo from '../../img/Logo.svg'
import '../../styles/Footer.scss'
import SendIcon from '../../img/SendIcon.svg'
export const Footer = () => {
	return (
		<footer className="footer container__center-mini">
			<div className="footer__about">
				<div className="about__other">
					<img className="about__other-img" src={Logo} draggable="false" />
					<p className="about__other-text">Eco&nbsp;Food&nbsp;Market SPROUT&nbsp;Goods&nbsp;Ltd.</p>
					<p className="about__other-copyright">2021&nbsp;©&nbsp;All&nbsp;rights&nbsp;reserved</p>
				</div>
				<div className="about__list">
					<h5 className="about__list-heading">Company</h5>
					<p className="about__list-item">About</p>
					<p className="about__list-item">Store</p>
					<p className="about__list-item">FAQ</p>
				</div>
				<div className="about__service">
					<h5 className="about__list-heading">Service</h5>
					<p className="about__list-item">Delivery</p>
					<p className="about__list-item">Payment</p>
					<p className="about__list-item">Contacts</p>
				</div>
				<div className="about__lis">
					<h5 className="about__list-heading">Follow us</h5>
					<p className="about__list-item">Instagram</p>
					<p className="about__list-item">Facebook</p>
					<p className="about__list-item">Twitter</p>
				</div>
				<div className="about__list">
					<h5 className="about__list-heading">Get our newsletters:</h5>
					<div className="about__list-input-container">
						<input className="about__list-input" type="text" />
						<button className="about__list-input-button">
							<img src={SendIcon} alt="" />
						</button>
					</div>
					<p className="about__list-text-container"><span className="about__list-text">Terms &amp; Conditions</span><span className="about__list-text">Privacy Policy</span></p>
				</div>
			</div>
		</footer>
	)
}