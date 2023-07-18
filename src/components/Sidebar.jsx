import SidebarItem from './SidebarItem'
import SidebarLink from './SidebarLink'
import ThemeButton from './ThemeButton'
import { useTheme } from '../context/ThemeContext'

export default function Sidebar() {
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	return (
		<aside className={`sidebar sidebar--${theme}`}>
			<section className='sidebar__section section-main'>
				<SidebarItem itemName='Home Page' />
				<SidebarLink itemName='History' />
				<SidebarLink itemName='Playlists' />
			</section>
			<section className='sidebar__section section-explore'>
				<h4 className='sidebar__section-title'>Explore</h4>
				<SidebarItem itemName='Trending' />
				<SidebarItem itemName='Music' />
				<SidebarItem itemName='Gaming' />
				<SidebarItem itemName='Sport' />
				<SidebarItem itemName='News' />
			</section>
			<section className='sidebar__section section-settings'>
				<h4 className='sidebar__section-title'>Settings</h4>
				<ThemeButton />
			</section>
		</aside>
	)
}
