export default function VideoCard({ videoTitle, channelName, thumbnail, publishDate }) {
	const styles = {
		backgroundImage: `url(${thumbnail})`
	}
	return (
		<div className='section__card'>
			<a href='#' className='section__card-thumbnail' style={styles}></a>
			<a href='#' className='section__card-title'>
				{videoTitle}
			</a>
			<a href='#' className='section__card-user'>
			{channelName}
			</a>
			<p href='#' className='section__card-views'>
				{publishDate}
			</p>
		</div>
	)
}
