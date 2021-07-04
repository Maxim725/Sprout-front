import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
export const LogInForm = ({ switchLoginOrCreate, login, authModalToggle }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const submit = async (e) => {
		e.preventDefault()
		const statusCode = await login(email, password)

		if (statusCode === 200) {
			authModalToggle(false)
		}
	}

	return (
		<div className="auth__login-container">
			<h1 className="auth__login-header auth__padding-top auth__margin-center">Log in</h1>
			<form className="auth__login-form" onSubmit={submit}>
				<div className="auth__login-form-normalize auth__padding-side">
					<div className="auth__create-item-container">
						<label className="auth__create-item">
							<p className="auth__create-text">Email</p>
							<input className="auth__create-input" type="text" onChange={(e) => { setEmail(e.target.value) }} />
						</label>
						<label className="auth__create-item">
							<p className="auth__create-text">Password</p>
							<input className="auth__create-input" type="password" onChange={(e) => { setPassword(e.target.value) }} />
						</label>
					</div>
				</div>
				<div class="auth__subform auth__padding-side">
					<div className="auth__subform-buttons">
						<button className="auth__subform-button-signup">
							<img src="" alt="" />
							<p>Log in</p>
						</button>
						<p>or</p>
						<button className="auth__subform-button-google">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19.0554 10.2222C19.0554 9.39998 18.9905 8.79998 18.8501 8.17777H9.72258V11.8888H15.0802C14.9723 12.8111 14.389 14.2 13.0927 15.1332L13.0746 15.2575L15.9605 17.5572L16.1605 17.5777C17.9967 15.8333 19.0554 13.2666 19.0554 10.2222Z" fill="#E45959" />
								<path d="M9.72266 20C12.3475 20 14.5509 19.111 16.1605 17.5777L13.0927 15.1332C12.2718 15.7221 11.1701 16.1333 9.72266 16.1333C7.15184 16.1333 4.96989 14.3889 4.19208 11.9778L4.07807 11.9877L1.0772 14.3766L1.03796 14.4888C2.63662 17.7555 5.92038 20 9.72266 20Z" fill="#E45959" />
								<path d="M4.19208 11.9778C3.98685 11.3556 3.86804 10.6888 3.86804 9.99998C3.86804 9.31105 3.98681 8.64441 4.18124 8.0222L4.17581 7.88968L1.13734 5.46242L1.03793 5.51106C0.379044 6.86663 0.000976562 8.38888 0.000976562 9.99998C0.000976562 11.6111 0.379078 13.1333 1.03796 14.4888L4.19208 11.9778Z" fill="#E45959" />
								<path d="M9.72265 3.86663C11.5481 3.86663 12.7795 4.67774 13.4817 5.35556L16.2253 2.6C14.5403 0.988891 12.3475 0 9.72265 0C5.92037 0 2.63658 2.24442 1.03793 5.51106L4.18124 8.0222C4.96985 5.6111 7.15183 3.86663 9.72265 3.86663Z" fill="#E45959" />
							</svg>
							<p className="auth__subform-button-google-text">Google</p>
						</button>
						<button className="auth__subform-button-facebook">
							<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11 4.71745e-05V4.16671H7.58622C7.16899 4.16671 6.82761 4.54172 6.82761 5.00004V7.50005H10.6207V11.6667H6.82761V20H3.0345V11.6667H0V7.50001H3.0345V4.99999C3.0345 2.37498 4.85517 0.208343 7.20689 0H11V4.71745e-05Z" fill="#3B5998" />
							</svg>
							<p className="auth__subform-button-facebook-text">Facebook</p>
						</button>
					</div>
					<div className="auth__subform-link-container">
						<p className="auth__subform-link-text">Don't have an account yet?</p>
						<a className="auth__subform-link" onClick={switchLoginOrCreate}>Sign up</a>
					</div>
				</div>
			</form>
		</div>
	)
}