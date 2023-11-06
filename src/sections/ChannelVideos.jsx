import VideoCard from '../components/VideoCard'
import { useState, useEffect } from 'react'
import fetchedData from '../data/channel-videos.json'

export default function ChannelVideos(videosArray) {
	const [videosData, setVideosData] = useState({
		authorName: null,
		authorId: null,
		authorIsVerified: null,
		authorAvatarUrl: null,
		videos: []
	})
	useEffect(() => {
		// Fetching data

		setVideosData({
			authorName: fetchedData.meta.title,
			authorId: fetchedData.meta.channelId,
			authorIsVerified: fetchedData.meta.isVerified,
			authorAvatarUrl: fetchedData.meta.avatar[0].url,
			videos: fetchedData.data.filter(video => video.type === 'video')
		})
	}, [])

	const videoCards = videosData.videos.map(video => (
		<VideoCard
			key={video.videoId}
			videoId={video.videoId}
			thumbnailUrl={video.thumbnail[3].url}
			videoTitle={video.title}
			authorName={videosData.authorName}
			authorId={videosData.authorId}
			authorIsVerified={videosData.authorIsVerified}
			authorAvatarUrl={null}
			videoPublishDate={video.publishedTimeText}
			viewCount={parseInt(video.viewCount)}
			videoLength={video.lengthText}
		/>
	))
	return (
		<>
			<div className='channel__sort'>
				<button className='sort-btn sort-btn--active'>Latest</button>
				<button className='sort-btn'>Popular</button>
			</div>
			<div className='channel-videos'>{videoCards}</div>
		</>
	)
}
