import Icon from './Icon'
export default function SearchBar({ parent, toggleNavSearchBar }) {
	return (
		<div className={`searchbar searchbar--${parent}`}>
			{parent === 'nav' && (
				<button onClick={toggleNavSearchBar} className='icon-btn close-searchbar'>
					<Icon type='regular' name='arrow-up' />
				</button>
			)}
			<input type='text' placeholder='Search...' className='searchbar-input' />
			<button className='searchbar-btn icon-btn'>
				<Icon type='regular' name='search' />
			</button>
		</div>
	)
}
