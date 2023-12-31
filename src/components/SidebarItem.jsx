import { useCategory } from '../context/CategoryContext'
import { toggleSidebar } from '../utils/toggleSidebar'
import Icon from './Icon'

export default function SidebarItem({ itemName, type }) {
	const updateCategory = useCategory().updateCategory
	const isActive = useCategory().selectedCategory.name === itemName ? true : false
	return (
		<button
			className={`sidebar__item ${isActive ? 'sidebar__item--active' : ''}`}
			onClick={() => {
				updateCategory({ name: itemName, type: type })
				toggleSidebar()
			}}>
			<Icon type='regular' name={itemName} />
			<span className='sidebar__item-name'>{itemName.charAt(0).toUpperCase() + itemName.slice(1)}</span>
		</button>
	)
}
