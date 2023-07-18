import { getIcon } from '../utils/getIcon'
import { useTheme } from '../context/ThemeContext'

export default function ThemeButton() {
	const theme = useTheme().darkTheme ? 'Dark Theme' : 'Light Theme'
	return (
		<button onClick={useTheme().toggleTheme} className='sidebar__item'>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
				<path d={getIcon(theme)} />
			</svg>
			<span className='sidebar__item-name'>{theme}</span>
		</button>
	)
}
