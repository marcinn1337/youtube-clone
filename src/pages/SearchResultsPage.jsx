import { useTheme } from '../context/ThemeContext'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { formatNumberToLocalString } from '../utils/formatNumberToLocalString'
import VideoCard from '../components/VideoCard'
import SearchResultsFilterForm from '../components/SearchResultsFilterForm'
import Icon from '../components/Icon'

export default function SearchResultsPage() {
	let { searchQuery } = useParams()
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	const [search, setSearch] = useState({
		estimatedResults: 0,
		filtersAreHidden: true,
		filters: {
			type: '',
			duration: '',
			features: '',
			upload_date: '',
			sort_by: ''
		},
		results: []
	})
	useEffect(() => {
		// Fetching data
		const params = {
			sort_by: 'relevance', // By ddefault its by relevance
			...search.filters,
			query: searchQuery
			// type: 'video',
		}
		fetchFromAPI('search', params).then(data => {
			const videos = data.data.filter(video => video.type === 'video')
			setSearch(prevSearch => {
				return {
					...prevSearch,
					estimatedResults: data.estimatedResults,
					results: videos.map(video => {
						return (
							<VideoCard
								key={video.videoId}
								videoId={video.videoId}
								thumbnailUrl={video.thumbnail[1] ? video.thumbnail[1].url : video.thumbnail[0].url}
								videoTitle={video.title}
								authorName={video.channelTitle}
								authorId={video.channelId}
								authorIsVerified={null}
								authorAvatarUrl={video.channelThumbnail[0].url ?? ''}
								videoPublishDate={video.publishedTimeText}
								viewCount={parseInt(video.viewCount)}
								videoLength={video.lengthText}
							/>
						)
					})
				}
			})
		})
	}, [searchQuery, search.filters])
	const toggleFiltersModal = () => {
		setSearch(prevSearch => {
			return {
				...prevSearch,
				filtersAreHidden: !prevSearch.filtersAreHidden
			}
		})
	}
	const initializeFiltering = filterSettings => {
		// Update search state and fetch videos with provided filter settings
		setSearch(prevSearch => {
			return {
				...prevSearch,
				filters: {
					...filterSettings,
					features: filterSettings.features.toString()
				}
			}
		})
	}
	return (
		<main className={`main-content main-content--${theme}`}>
			<div className='center-wrapper'>
				<div className='search__filter'>
					<button onClick={toggleFiltersModal} className='search__filter-toggle-btn'>
						<Icon type='small' name='tune' />
						Filters
						<Icon type='small' name='chevron-down' />
					</button>
					{!search.filtersAreHidden && <SearchResultsFilterForm initializeFiltering={initializeFiltering} />}
				</div>
				<p className='search__details'>
					({formatNumberToLocalString(search.estimatedResults)}) Results for: <span>{searchQuery}</span>
				</p>
				<div className='search__results'>{search.results}</div>
			</div>
		</main>
	)
}
