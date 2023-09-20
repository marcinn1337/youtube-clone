import ChannelVideoCard from '../components/ChannelVideoCard'
import { useState } from 'react'
import channelVideos from '../test_data/channel-videos.json'

export default function ChannelVideos() {
	const testData = channelVideos.data.filter(video => video.type === 'video')
	const videoCards = testData.map(video => (
		<ChannelVideoCard
			key={video.videoId}
			videoId={video.videoId}
			videoTitle={video.title}
			thumbnailUrl={video.thumbnail[3].url}
			publishDate={video.publishedTimeText}
			views={parseInt(video.viewCount)}
			length={video.lengthText}
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
