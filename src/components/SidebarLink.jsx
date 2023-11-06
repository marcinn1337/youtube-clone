import Icon from './Icon'
import { toggleSidebar } from '../utils/toggleSidebar'

export default function SidebarLink({ itemName }) {
	return (
		<button className='sidebar__item'>
			<Icon type='regular' name={itemName} />
			<span className='sidebar__item-name'>{itemName}</span>
		</button>
	)
}
