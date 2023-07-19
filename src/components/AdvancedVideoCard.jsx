import { useTheme } from '../context/ThemeContext'

export default function AdvancedVideoCard({ videoTitle, channelName, thumbnailUrl, publishDate, views, avatarUrl }) {
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	const thumbnailStyles = {
		backgroundImage: `url(${thumbnailUrl})`
	}
	const avatarStyles = {
		backgroundImage: `url(${avatarUrl})`
	}
	return (
		<div className={`advanced-video-card advanced-video-card--${theme}`}>
			<a href='#' className='advanced-video-card__thumbnail' style={thumbnailStyles}></a>
			<div className='advanced-video-card__info'>
				<a href='#' className='advanced-video-card__channel-avatar' style={avatarStyles}></a>
				<a href='#' className='advanced-video-card__title'>
					{videoTitle}
				</a>
				<a href='#' className='advanced-video-card__channel-name'>
					{channelName}
				</a>
				<p href='#' className='advanced-video-card__details'>
					{`${views.toLocaleString('en-US', { notation: 'compact' })} views`} - {publishDate}
				</p>
			</div>
		</div>
	)
}
