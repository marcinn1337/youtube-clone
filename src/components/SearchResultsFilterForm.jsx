import { useState } from 'react'

export default function SearchResultsFilterForm({ initializeFiltering }) {
	// !! Radio buttons have onClick event handler instead of onChange, to make possible to uncheck if radio input is checked (impossible by default in html forms. They have empty onChange handler to avoid console errors
	// Currently search is only available for video type
	const [filterForm, setFilterForm] = useState({
		type: '',
		duration: '',
		features: [],
		upload_date: '',
		sort_by: ''
	})
	const updateFilterForm = e => {
		const { value, name } = e.target
		setFilterForm(prevFilterForm => {
			if (name !== 'features')
				return {
					...prevFilterForm,
					[name]: prevFilterForm[name] === value ? '' : value
				}
			return {
				...prevFilterForm,
				// Delete feature if it's already checked, if not then add value to features array
				features: !prevFilterForm.features.includes(value)
					? [...prevFilterForm.features, value]
					: prevFilterForm.features.filter(feature => feature !== value)
			}
		})
	}
	const clearFilterSettings = () => {
		setFilterForm({
			type: '',
			duration: '',
			features: [],
			upload_date: '',
			sort_by: ''
		})
	}

	return (
		<form>
			<button
				type='button'
				onClick={() => {
					// Send filter settings which will rerender parent component and fetch videos with filter parameters
					initializeFiltering(filterForm)
				}}>
				Filter
			</button>
			<button onClick={clearFilterSettings}>Clear Filters</button>
			<div>
				<section>
					<h5>Type</h5>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='type'
						id='video'
						value='video'
						checked={filterForm.type === 'video'}
					/>
					<label htmlFor='video'>video</label>
					<input type='radio' name='type' id='channel' value='channel' disabled />
					<label htmlFor='channel'>channel</label>
					<input type='radio' name='type' id='playlist' value='playlist' disabled />
					<label htmlFor='playlist'>playlist</label>
					<input type='radio' name='type' id='movie' value='movie' disabled />
					<label htmlFor='movie'>movie</label>
					<input type='radio' name='type' id='show' value='show' disabled />
					<label htmlFor='show'>show</label>
				</section>
				<section>
					<h5>Duration</h5>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='duration'
						id='short'
						value='short'
						checked={filterForm.duration === 'short'}
					/>
					<label htmlFor='short'>less than 4 min</label>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='duration'
						id='medium'
						value='medium'
						checked={filterForm.duration === 'medium'}
					/>
					<label htmlFor='medium'>4 to 20 min</label>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='duration'
						id='long'
						value='long'
						checked={filterForm.duration === 'long'}
					/>
					<label htmlFor='long'>more than 20 min</label>
				</section>
				<section>
					<h5>Features</h5>
					<input
						onChange={updateFilterForm}
						type='checkbox'
						name='features'
						id='HD'
						value='HD'
						checked={filterForm.features.includes('HD')}
					/>
					<label htmlFor='HD'>HD</label>
					<input
						onChange={updateFilterForm}
						type='checkbox'
						name='features'
						id='subtitles'
						value='subtitles'
						checked={filterForm.features.includes('subtitles')}
					/>
					<label htmlFor='subtitles'>Subtitles</label>
					<input
						onChange={updateFilterForm}
						type='checkbox'
						name='features'
						id='CCommons'
						value='CCommons'
						checked={filterForm.features.includes('CCommons')}
					/>
					<label htmlFor='CCommons'>CCommons</label>
					<input
						onChange={updateFilterForm}
						type='checkbox'
						name='features'
						id='3D'
						value='3D'
						checked={filterForm.features.includes('3D')}
					/>
					<label htmlFor='3D'>3D</label>
					<input
						onChange={updateFilterForm}
						type='checkbox'
						name='features'
						id='Live'
						value='Live'
						checked={filterForm.features.includes('Live')}
					/>
					<label htmlFor='Live'>Live</label>
					<input
						onChange={updateFilterForm}
						type='checkbox'
						name='features'
						id='4K'
						value='4K'
						checked={filterForm.features.includes('4K')}
					/>
					<label htmlFor='4K'>4K</label>
					<input
						onChange={updateFilterForm}
						type='checkbox'
						name='features'
						id='360'
						value='360'
						checked={filterForm.features.includes('360')}
					/>
					<label htmlFor='360'>360</label>
					<input
						onChange={updateFilterForm}
						type='checkbox'
						name='features'
						id='HDR'
						value='HDR'
						checked={filterForm.features.includes('HDR')}
					/>
					<label htmlFor='HDR'>HDR</label>
					<input
						onChange={updateFilterForm}
						type='checkbox'
						name='features'
						id='VR180'
						value='VR180'
						checked={filterForm.features.includes('VR180')}
					/>
					<label htmlFor='VR180'>VR180</label>
				</section>
				<section>
					<h5>Upload Date</h5>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='upload_date'
						id='hour'
						value='hour'
						checked={filterForm.upload_date === 'hour'}
					/>
					<label htmlFor='hour'>last hour</label>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='upload_date'
						id='today'
						value='today'
						checked={filterForm.upload_date === 'today'}
					/>
					<label htmlFor='today'>today</label>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='upload_date'
						id='week'
						value='week'
						checked={filterForm.upload_date === 'week'}
					/>
					<label htmlFor='week'>week</label>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='upload_date'
						id='month'
						value='month'
						checked={filterForm.upload_date === 'month'}
					/>
					<label htmlFor='month'>month</label>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='upload_date'
						id='year'
						value='year'
						checked={filterForm.upload_date === 'year'}
					/>
					<label htmlFor='year'>year</label>
				</section>
				<section>
					<h5>Sort by</h5>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='sort_by'
						id='relevance'
						value='relevance'
						checked={filterForm.sort_by === 'relevance'}
					/>
					<label htmlFor='relevance'>relevance</label>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='sort_by'
						id='rating'
						value='rating'
						checked={filterForm.sort_by === 'rating'}
					/>
					<label htmlFor='rating'>rating</label>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='sort_by'
						id='date'
						value='date'
						checked={filterForm.sort_by === 'date'}
					/>
					<label htmlFor='date'>date</label>
					<input
						onChange={() => {}}
						onClick={updateFilterForm}
						type='radio'
						name='sort_by'
						id='views'
						value='views'
						checked={filterForm.sort_by === 'views'}
					/>
					<label htmlFor='views'>views</label>
				</section>
			</div>
		</form>
	)
}
