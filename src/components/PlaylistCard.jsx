export default function PlaylistCard({ thumbnailUrl, videosAmount, views, title, lastUpdated }) {
	const thumbnailStyles = {
		backgroundImage: `url(${thumbnailUrl})`
	}
	return (
		<div className='playlist-card'>
			<a className='playlist-card__thumbnail' style={thumbnailStyles}>
				<div className='playlist-card__details'>
					<span className='playlist-card__videos'>{videosAmount} videos</span>
				</div>
			</a>
			<a className='playlist-card__title'>{title}</a>
			<p className='playlist-card__update-info'>{lastUpdated}</p>
		</div>
	)
}
