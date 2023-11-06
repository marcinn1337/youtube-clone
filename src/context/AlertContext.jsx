import { useState, createContext, useContext, useRef } from 'react'

const AlertContext = createContext()
export const useAlert = () => useContext(AlertContext)


export function AlertProvider({ children }) {
	const [alert, setAlert] = useState({
		alertType: false,
		message: null
	})
	const animationTimeout = useRef()

	const showAlert = (alertType, messageId) => {
		setAlert({
			alertType,
			message: messages[alertType][messageId]
		})
		const alertBox = document.querySelector('.alert-box')

		// Clean interval to avoid glitching alertBox when someone is spam clicking and calling this function
		clearTimeout(animationTimeout.current)
		alertBox.classList.add('slide')
		animationTimeout.current = setTimeout(() => {
			alertBox.classList.remove('slide')
		}, 4000)
	}

	return <AlertContext.Provider value={{ alert, showAlert }}>{children}</AlertContext.Provider>
}
