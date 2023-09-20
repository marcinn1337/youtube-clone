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
				<SidebarItem type={'category'} itemName='Trending' />
				<SidebarItem type={'category'} itemName='Music' />
				<SidebarItem type={'category'} itemName='Games' />
				<SidebarItem type={'category'} itemName='Movies' />
				<SidebarItem type={'hashtag'} itemName='Sport' />
				<SidebarItem type={'hashtag'} itemName='Technology' />
				<SidebarItem type={'hashtag'} itemName='Finance' />
				<SidebarItem type={'hashtag'} itemName='News' />
			</section>
			<section className='sidebar__section section-settings'>
				<h4 className='sidebar__section-title'>Settings</h4>
				<ThemeButton />
			</section>
		</aside>
	)
}
