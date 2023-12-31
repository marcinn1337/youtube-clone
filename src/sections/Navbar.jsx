import { useTheme } from '../context/ThemeContext'
import { Link, useNavigate } from 'react-router-dom'
import { toggleSidebar } from '../utils/toggleSidebar'
import SearchBar from '../components/SearchBar'
import Icon from '../components/Icon'

export default function Navbar() {
	const navigate = useNavigate()
	const theme = useTheme().darkTheme ? 'dark' : 'light'

	const toggleSearchbar = () => {
		document.querySelector('.searchbar--nav').classList.toggle('searchbar--visible')
	}
	const initSearch = searchQuery => {
		navigate(`/search/${searchQuery}`)
	}
	return (
		<nav className={`nav nav--${theme}`}>
			<div className='wrapper'>
				<button className='icon-btn' onClick={toggleSidebar}>
					<Icon type='regular' name='list' />
				</button>
				<h1 className='nav__title'>
					<Link to='/'>
						<span>clone</span>Tube
					</Link>
				</h1>
				<button onClick={toggleSearchbar} className='icon-btn show-searchbar'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
						<path d='M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z' />
					</svg>
				</button>
				<a href='#' className='show-profile'>
					<button className='icon-btn'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
							<path d='M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm.654 370Q398-80 325-111.5q-73-31.5-127.5-86t-86-127.266Q80-397.532 80-480.266T111.5-635.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5-848.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5-325q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480-140q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z' />
						</svg>
					</button>
					<button className='nav__login-btn cta-btn'>Login</button>
				</a>
				<SearchBar parent='nav' toggleNavSearchBar={toggleSearchbar} initSearch={initSearch} />
			</div>
		</nav>
	)
}
