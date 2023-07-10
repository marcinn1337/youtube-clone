import SidebarItem from './SidebarItem'
import { calcNavHeight } from '../utils/calcNavHeight'

export default function Sidebar() {
	const styles = {
		marginTop: `${calcNavHeight()}px`,
		height: `calc(100vh - ${calcNavHeight()}px)`
	}
	return (
		<aside style={styles} className='sidebar'>
			<section className='sidebar__section section-main'>
				<SidebarItem itemName='Home Page' />
				<SidebarItem itemName='History' />
				<SidebarItem itemName='Playlists' />
			</section>
			<section className='sidebar__section section-explore'></section>
			<section className='sidebar__section section-settings'></section>
		</aside>
	)
}
