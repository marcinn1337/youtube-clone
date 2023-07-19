export default function VideoCard({ videoTitle, channelName, thumbnail, publishDate }) {
	const styles = {
		backgroundImage: `url(${thumbnail})`
	}
	return (
		<div className='video__card'>
			<a href='#' className='video__card-thumbnail' style={styles}></a>
			<a href='#' className='video__card-title'>
				{videoTitle}
			</a>
			<a href='#' className='video__card-user'>
				{channelName}
			</a>
			<p href='#' className='video__card-views'>
				{publishDate}
			</p>
		</div>
	)
}
