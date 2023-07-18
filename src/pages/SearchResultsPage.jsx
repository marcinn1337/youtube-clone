import VideoCard from '../components/VideoCard'

export default function SearchResultsPage() {
	return (
		<section className='search-results'>
			<VideoCard
				videoTitle={'Video title'}
				channelName={'Channel Name'}
				thumbnail={''}
				publishDate={'28 December 2023'}
			/>
		</section>
	)
}
