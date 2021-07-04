import React, { useEffect, useState, useRef } from 'react'
import { LogInForm } from './LogInForm'
import { CreateAccountForm } from './CreateAccountForm'
import '../../styles/AuthForm.scss'
import { useAuth, useAuthModal } from '../Context/AuthContext'
import { useClickOutside } from '../../hooks/useClickOutside'

export const AuthForm = () => {
	const refClick = useRef();
	const { isOpen, toggle } = useAuthModal()
	const [isLogin, setIsLogin] = useState(false)
	const { login, register, isAuth } = useAuth()

	useClickOutside(refClick, () => {
		toggle(false)
	})

	useEffect(() => {
		document.body.style.overflow = 'hidden'


		return () => {
			document.body.style.overflowY = 'scroll'
		}

	}, [])

	useEffect(() => {
		console.log("IS_AUTH", isAuth)
	}, [isAuth])

	const switchLoginOrCreate = () => {
		setIsLogin(!isLogin)
	}

	return (
		<>
			{isOpen ?
				<>
					<div className="auth__bg"></div>
					<div className="auth" >
						<div className="auth__container" ref={refClick}>
							{isLogin
								? <LogInForm switchLoginOrCreate={switchLoginOrCreate} login={login} authModalToggle={toggle} />
								: <CreateAccountForm switchLoginOrCreate={switchLoginOrCreate} register={register} authModalToggle={toggle} />
							}
						</div>
					</div>
				</>
				: null}
		</>
	)
}