import { getIcon } from '../utils/getIcon'

export default function SidebarItem({ itemName }) {
	return (
		<button className='sidebar__item'>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
				<path d={getIcon(itemName)} />
			</svg>
			<span className='sidebar__item-name'>{itemName}</span>
		</button>
	)
}
