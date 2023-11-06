import Icon from './Icon'
import { useTheme } from '../context/ThemeContext'

export default function ThemeButton() {
	const theme = useTheme().darkTheme ? 'dark theme' : 'light theme'
	return (
		<button onClick={useTheme().toggleTheme} className='sidebar__item'>
			<Icon type='regular' name={theme} />
			<span className='sidebar__item-name'>{theme}</span>
		</button>
	)
}
