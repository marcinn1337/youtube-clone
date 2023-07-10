import { getIcon } from '../utils/getIcon'

export default function SidebarItem({ itemName }) {
	return (
		<button className='sidebar__item'>
			<div className='sidebar__item-icon'></div>
			<span className='sidebar__item-name'>{itemName}</span>
		</button>
	)
}
