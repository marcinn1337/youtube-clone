export default function SimpleVideoCard({ videoTitle, channelName, thumbnailUrl, publishDate }) {
	const styles = {
		backgroundImage: `url(${thumbnailUrl})`
	}
	return (
		<div className='simple-video-card'>
			<a href='#' className='simple-video-card__thumbnail' style={styles}></a>
			<a href='#' className='simple-video-card__title'>
				{videoTitle}
			</a>
			<a href='#' className='simple-video-card__channel-name'>
				{channelName}
			</a>
			<p href='#' className='simple-video-card__views'>
				{publishDate}
			</p>
		</div>
	)
}
