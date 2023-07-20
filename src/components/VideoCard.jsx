import { useTheme } from '../context/ThemeContext'
import VerifiedBadge from './VerifiedBadge'

export default function VideoCard({
	videoTitle,
	channelName,
	thumbnailUrl,
	publishDate,
	views,
	avatarUrl,
	channelBadge
}) {
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	const thumbnailStyles = {
		backgroundImage: `url(${thumbnailUrl})`
	}
	const avatarStyles = {
		backgroundImage: `url(${avatarUrl})`
	}
	const isVerified = channelBadge === undefined ? false : true
	return (
		<div className={`video-card video-card--${theme}`}>
			<a href='#' className='video-card__thumbnail' style={thumbnailStyles}></a>
			<div className='video-card__info'>
				<a href='#' className='video-card__channel-avatar' style={avatarStyles}></a>
				<a href='#' className='video-card__title'>
					{videoTitle}
				</a>
				<a href='#' className='video-card__channel-name'>
					{channelName}
					{isVerified && <VerifiedBadge />}
				</a>
				<p href='#' className='video-card__details'>
					{`${views.toLocaleString('en-US', { notation: 'compact' })} views`} - {publishDate}
				</p>
			</div>
		</div>
	)
}
