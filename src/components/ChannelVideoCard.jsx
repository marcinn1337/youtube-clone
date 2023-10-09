import { useState } from 'react'
import { getIcon } from '../utils/getIcon'
import Icon from './Icon'
import ModalBackground from './ModalBackground'
export default function ChannelVideoCard({ videoTitle, thumbnailUrl, publishDate, views, length }) {
	const [actionsListIsVisible, setActionListIsVisible] = useState(false)
	const thumbnailStyles = {
		backgroundImage: `url(${thumbnailUrl})`
	}

	const toggleActionsList = e => {
		setActionListIsVisible(prevActionListIsVisible => !prevActionListIsVisible)
	}
	return (
		<div className='video-card'>
			<a href='#' className='video-card__thumbnail' style={thumbnailStyles}>
				<button className='video-card__watch-later-btn'>
					<Icon type='small' name='clock' />
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
				<button onClick={toggleActionsList} className='video-card__actions-btn'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
						<path d={getIcon('more-vertical')} />
					</svg>
				</button>
				{actionsListIsVisible && (
					<div className='video-card__actions'>
						<ModalBackground closeModal={toggleActionsList} type='transparent' />
						<button>
							<Icon type='small' name='clock' />
							Watch later
						</button>
						<button>
							<Icon type='small' name='add-to-queue' />
							Add to queue
						</button>
						<button>
							<Icon type='small' name='add-to-playlist' />
							Save to playlist
						</button>
						<button>
							<Icon type='small' name='share' />
							Share
						</button>
						<button>
							<Icon type='small' name='block' />
							Not interested
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
