import { getIcon } from '../utils/getIcon'

export default function ChannelVideoCard({ videoTitle, thumbnailUrl, publishDate, views, length }) {
	const thumbnailStyles = {
		backgroundImage: `url(${thumbnailUrl})`
	}
	return (
		<div className={`video-card`}>
			<a href='#' className='video-card__thumbnail' style={thumbnailStyles}>
				<button className='video-card__watch-later-btn'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
						<path d={getIcon('Clock')} />
					</svg>
				</button>
				<span className='video-card__duration'>{length}</span>
			</a>
			<div className='video-card__info'>
				<a href='#tytul' className='video-card__title'>
					{videoTitle}
				</a>
				<p href='#' className='video-card__details'>
					{`${views.toLocaleString('en-US', { notation: 'compact' })} views`} - {publishDate}
				</p>
				<button className='video-card__options-btn'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
						<path d={getIcon('more-vertical')} />
					</svg>
				</button>
			</div>
		</div>
	)
}
