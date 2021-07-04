import React, { createContext, useContext, useState, useEffect } from 'react'
import { LOGIN, CHECK, REGISTER, LOGOUT } from '../../API_LINKS'

const Context = createContext()
const ContextModal = createContext()

export const useAuth = () => {
	return useContext(Context)
}

export const useAuthModal = () => {
	return useContext(ContextModal)
}

export const AuthProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [name, setName] = useState(undefined)
	const [id, setId] = useState(undefined)
	const [isAuth, setAuth] = useState(false)

	useEffect(() => {
		console.log("UF:::")
		check().then(data => {
			// setAuth(data.isAuth)
			// setName(data.name)
			// setId(data.id)

			console.log("CHECK:::")
		}
		)
	}, [])

	const login = async (email, password) => {

		const res = await fetch(LOGIN, {
			method: "POST",
			credentials: 'include',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })

		})

		const content = await res.json()

		console.log("RESULT::", res)
		console.log("CONTENT: ", content)

		if (res.status === 200) {
			setName(content.name)
			setId(content.id)
			setAuth(true)
		}

		return res.status
	}

	const register = async (firstName, lastName, email, phone, birthDate, password) => {
		const res = await fetch(REGISTER, {
			method: "POST",
			credentials: "include",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: firstName,
				lastName,
				email,
				phone,
				birthDate,
				password
			})
		})

		if (res.status < 200 || res.status > 220) {
			const data = await res.json()
			console.error("REGISTER ERROR", res)
			console.error("REGISTER DATA", data)
		}
	}

	const authorizedArea = async (resolve, reject = () => toggle()) => {
		if (isAuth) {
			resolve({ name, id })
		}
		else {
			reject()
		}
	}

	const check = async () => {
		console.log("check")

		const res = await fetch(CHECK, {
			method: "POST",
			credentials: "include",
			headers: { 'Content-Type': 'application/json' },
		})

		console.log("check data::", res)
		const content = await res.json()
		console.log("check", content)

		if (res.status === 200) {
			setName(content.name)
			setId(content.id)
			setAuth(true)

			return {
				name: content.name,
				id: content.id,
				isAuth: true,
				statusCode: res.status
			}
		}
		else {
			return {
				isAuth: false
			}
		}


	}

	const toggle = (flag) => {
		let value = !isOpen

		if (flag) {
			value = flag
		}

		setIsOpen(value)

		return value
	}

	const logout = async () => {
		const res = await fetch(LOGOUT, {
			method: "POST",
			credentials: "include",
			headers: { 'Content-Type': 'application/json' },
		})

		if (res.status === 200) {
			setAuth(false)
			setName(undefined)
			setId(undefined)
		}
	}

	return (
		<Context.Provider value={{
			login,
			register,
			logout,
			authorizedArea,
			isAuth,
			name,
			id
		}}>
			<ContextModal.Provider value={{
				isOpen,
				toggle
			}}>
				{children}
			</ContextModal.Provider>
		</Context.Provider>
	)
}