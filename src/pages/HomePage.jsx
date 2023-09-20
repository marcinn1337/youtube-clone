import VideoCard from '../components/VideoCard'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useCategory } from '../context/CategoryContext'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { fetchHomePageFromAPI } from '../utils/fetchHomePageFromAPI'
import trendingNowData from '../test_data/trending-now.json'
// import '../test_data/trending-gaming.json'
export default function HomePage() {
	const selectedCategory = useCategory().selectedCategory
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	let videos,
		videoCards = []
	const testData = trendingNowData.data
	const videosArray = testData.filter(video => video.type === 'video')
	// Fetch videos and create video cards
	// fetchHomePageFromAPI().then(data => console.log(data))
	// videos = testData2.contents
	// Map video cards
	videoCards = videosArray.map(video => (
		<VideoCard
			key={video.videoId}
			videoId={video.videoId}
			videoTitle={video.title}
			channelId={video.channelId}
			channelName={video.channelTitle}
			thumbnailUrl={video.thumbnail[2].url}
			publishDate={video.publishedTimeText}
			views={parseInt(video.viewCount)}
			avatarUrl={video.channelThumbnail[0].url}
		/>
	))

	return (
		<main className={`main-content main-content--${theme} home-page`}>
			<div className='center-wrapper'>
				<h2 className='home-page__title'>{selectedCategory}</h2>
				<div className='home-page__cards'>{videoCards}</div>
			</div>
		</main>
	)
}
