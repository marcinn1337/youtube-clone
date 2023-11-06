import SidebarItem from '../components/SidebarItem'
import SidebarLink from '../components/SidebarLink'
import ThemeButton from '../components/ThemeButton'
import { useTheme } from '../context/ThemeContext'

export default function Sidebar() {
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	return (
		<aside className={`sidebar sidebar--${theme}`}>
			<section className='sidebar__section section-main'>
				<SidebarItem type='default' itemName='home' />
				<SidebarItem type='default' itemName='watch later' />
				<SidebarLink itemName='history' />
				<SidebarLink itemName='playlists' />
			</section>
			<section className='sidebar__section section-explore'>
				<h4 className='sidebar__section-title'>Explore</h4>
				<SidebarItem type='default' itemName='trending' />
				<SidebarItem type='trending' itemName='music' />
				<SidebarItem type='trending' itemName='games' />
				<SidebarItem type='trending' itemName='movies' />
				<SidebarItem type='hashtag' itemName='sport' />
				<SidebarItem type='hashtag' itemName='technology' />
				<SidebarItem type='hashtag' itemName='finance' />
				<SidebarItem type='hashtag' itemName='news' />
			</section>
			<section className='sidebar__section section-settings'>
				<h4 className='sidebar__section-title'>Settings</h4>
				<ThemeButton />
			</section>
		</aside>
	)
}
