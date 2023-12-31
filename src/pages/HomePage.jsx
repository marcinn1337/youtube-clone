import VideoCard from '../components/VideoCard'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useCategory } from '../context/CategoryContext'
import { fetchFromAPI } from '../utils/fetchFromAPI'
export default function HomePage() {
	const selectedCategory = useCategory().selectedCategory
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	const [videos, setVideos] = useState([])
	useEffect(() => {
		// Fetching data...
		let params = { geo: 'US' }
		let endPoint = selectedCategory.name
		if (selectedCategory.type === 'trending') {
			endPoint = 'trending'
			params = {
				geo: 'US',
				type: selectedCategory.name
			}
		} else if (selectedCategory.type === 'hashtag') {
			endPoint = 'hashtag'
			params = {
				geo: 'US',
				tag: selectedCategory.name
			}
		}
		fetchFromAPI(endPoint, params).then(data => {
			// Filter data to avoid short listings etc.
			const videosData = data.data.filter(video => video.type === 'video')
			// Create video cards and save them to "videos" state
			const videoCards = videosData.map(video => (
				<VideoCard
					key={video.videoId}
					videoId={video.videoId}
					thumbnailUrl={video.thumbnail[video.thumbnail.length - 1].url}
					videoTitle={video.title}
					authorName={video.channelTitle}
					authorId={video.channelId}
					authorIsVerified={null}
					authorAvatarUrl={video.channelThumbnail[video.channelThumbnail.length - 1].url}
					videoPublishDate={video.publishedTimeText}
					viewCount={parseInt(video.viewCount)}
					videoLength={video.lengthText}
				/>
			))
			setVideos(videoCards)
		})
	}, [selectedCategory])
	return (
		<main className={`main-content main-content--${theme} home-page`}>
			<div className='center-wrapper'>
				<h2 className='home-page__title'>{selectedCategory.name}</h2>
				<div className='home-page__cards'>{videos}</div>
			</div>
		</main>
	)
}
