import Icon from './Icon'
import { useState } from 'react'
export default function SearchBar({ parent, toggleNavSearchBar, initSearch }) {
	const [query, setQuery] = useState('')
	const updateSearchbarInput = e => {
		setQuery(e.target.value)
	}
	return (
		<div className={`searchbar searchbar--${parent}`}>
			{parent === 'nav' && (
				<button onClick={toggleNavSearchBar} className='icon-btn close-searchbar'>
					<Icon type='regular' name='arrow-up' />
				</button>
			)}
			<input
				name='searchbarInput'
				id='searchbarInput'
				type='text'
				placeholder='Search...'
				className='searchbar-input'
				onChange={updateSearchbarInput}
			/>
			<button
				onClick={() => {
					initSearch(query)
				}}
				className='searchbar-btn icon-btn'>
				<Icon type='regular' name='search' />
			</button>
		</div>
	)
}
