import Icon from './Icon'
import { useAlert } from '../context/AlertContext'
import { useTheme } from '../context/ThemeContext'
export default function AlertBox() {
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	const iconType = useAlert().alert.alertType === 'success' ? 'check' : useAlert().alert.alertType
	return (
		<div className={`alert-box alert-box--${theme}`}>
			<Icon type='alert' name={iconType} alertType={useAlert().alert.alertType} />
			{useAlert().alert.message}
		</div>
	)
}
