import VideoCard from '../components/VideoCard'
import { useTheme } from '../context/ThemeContext'
import { useState, useEffect } from 'react'
import searchResults from '../data/search-results.json'
import { formatNumberToLocalString } from '../utils/formatNumberToLocalString'

export default function SearchResultsPage() {
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	const [searchInfo, setSearchInfo] = useState({
		query: '',
		estimatedResults: 0,
		results: []
	})
	useEffect(() => {
		// Fetching data...
		// ...

		setSearchInfo({
			query: 'test search query',
			estimatedResults: searchResults.estimatedResults,
			results: searchResults.data.filter(video => video.type === 'video')
		})
	}, [])
	// Map video cards
	const videoCards = searchInfo.results.map(video => {
		// console.log(video, video.thumbnail)
		return (
			<VideoCard
				key={video.videoId}
				videoId={video.videoId}
				thumbnailUrl={video.thumbnail[1] ? video.thumbnail[1].url : video.thumbnail[0].url}
				videoTitle={video.title}
				authorName={video.channelTitle}
				authorId={video.channelId}
				authorIsVerified={null}
				authorAvatarUrl={video.channelThumbnail[0].url}
				videoPublishDate={video.publishedTimeText}
				viewCount={parseInt(video.viewCount)}
				videoLength={video.lengthText}
			/>
		)
	})
	return (
		<main className={`main-content main-content--${theme}`}>
			<div className='center-wrapper'>
				<p className='search-details'>
					({formatNumberToLocalString(searchInfo.estimatedResults)}) Results for: <span>{searchInfo.query}</span>
				</p>
				<div className='search-results'>{videoCards}</div>
			</div>
		</main>
	)
}
