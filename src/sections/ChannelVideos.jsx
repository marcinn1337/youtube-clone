import VideoCard from '../components/VideoCard'
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'

export default function ChannelVideos({ author }) {
	const [videos, setVideos] = useState([])
	const [fetchParams, setFetchParams] = useState({
		id: author.id,
		sort_by: 'newest'
	})
	useEffect(() => {
		// Fetching data
		fetchFromAPI('channel/videos', fetchParams).then(data => {
			const videos = data.data.filter(video => video.type === 'video')
			setVideos(prevVideos => {
				return videos.map(video => (
					<VideoCard
						key={video.videoId}
						videoId={video.videoId}
						thumbnailUrl={video.thumbnail[3].url}
						videoTitle={video.title}
						authorName={author.title}
						authorId={author.id}
						authorIsVerified={null}
						authorAvatarUrl={null}
						videoPublishDate={video.publishedTimeText}
						viewCount={parseInt(video.viewCount)}
						videoLength={video.lengthText}
					/>
				))
			})
		})
	}, [author.id, fetchParams])
	const sortVideos = e => {
		if (e.target.classList.contains('sort-btn--active')) return
		const sortButtons = document.querySelectorAll('.sort-btn')
		sortButtons.forEach(button => {
			// Delete --active modifier from current active button
			if (button.classList.contains('sort-btn--active')) {
				button.classList.remove('sort-btn--active')
			}
		})
		// Add --modifier to button which user clicked
		e.target.classList.add('sort-btn--active')
		// Change fetch params which will rerender component and fetch videos with new params
		setFetchParams(prevFetchParams => {
			return {
				...prevFetchParams,
				sort_by: e.target.textContent
			}
		})
	}
	return (
		<>
			<div className='channel__sort'>
				<button onClick={sortVideos} className='sort-btn sort-btn--active'>
					newest
				</button>
				<button onClick={sortVideos} className='sort-btn'>
					popular
				</button>
				<button onClick={sortVideos} className='sort-btn'>
					oldest
				</button>
			</div>
			<div className='channel-videos'>{videos}</div>
		</>
	)
}
