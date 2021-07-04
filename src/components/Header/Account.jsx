import React, { useEffect, useState } from 'react'
import UserIcon from '../../img/User.svg'
import ArrowDown from '../../img/ArrowDown.svg'
import { useAuth, useAuthModal } from '../Context/AuthContext'

export const Account = () => {
	const { name, isAuth, logout } = useAuth()
	const { toggle } = useAuthModal()

	const [nameAuth, setNameAuth] = useState()

	const openAuthModal = () => {
		if (isAuth)
			logout()
		else
			toggle(true)
	}

	return (
		<div className="header__account" onClick={openAuthModal}>
			<img className="header__account-icon" alt="user icon" src={UserIcon} />
			<span className="header__account-name">{name || "Войти"}</span>
			{isAuth
				? <img className="header__cart-arrow-down-icon" alt="arrow down" src={ArrowDown} />
				: null
			}
		</div>
	)
}