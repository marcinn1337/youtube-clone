import { useState } from 'react'
import { Link } from 'react-router-dom'
import VerifiedBadge from './VerifiedBadge'
import Icon from './Icon'
import ModalBackground from './ModalBackground'
import { formatNumberToLocalString } from '../utils/formatNumberToLocalString'
import { isTouchscreenEnabled } from '../utils/isTouchscreenEnabled'

export default function VideoCard({
	videoId,
	thumbnailUrl,
	videoTitle,
	authorName,
	authorIsVerified,
	authorAvatarUrl,
	videoPublishDate,
	viewCount,
	videoLength
}) {
	const [actionsListIsVisible, setActionListIsVisible] = useState(false)

	const thumbnailUrlStyle = {
		backgroundImage: `url(${thumbnailUrl})`
	}
	const avatarUrlStyle = {
		backgroundImage: `url(${authorAvatarUrl})`
	}
	const toggleActionsList = e => {
		e.preventDefault()
		setActionListIsVisible(prevActionListIsVisible => !prevActionListIsVisible)
	}
	return (
		<div className={`video-card ${isTouchscreenEnabled() ? 'video-card--onmobile' : ''}`}>
			<Link
				to={`/video/${videoId}`}
				className='video-card__thumbnail'
				style={thumbnailUrlStyle}
				state={{ videoId: videoId, avatarUrlStyle }}>
				<button className='video-card__watch-later-btn thumbnail-btn'>
					<Icon type='small' name='clock' />
					<span className='tooltip'>Watch Later</span>
				</button>
				<button onClick={toggleActionsList} className='video-card__actions-btn thumbnail-btn'>
					<Icon type='small' name='more-vertical' />
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
				<span className='video-card__duration'>{videoLength}</span>
			</Link>
			<div className='video-card__info'>
				<a href='' className='video-card__author-avatar' style={avatarUrlStyle}></a>
				<a href='#tytul' className='video-card__title'>
					{videoTitle}
				</a>
				<a href='#elo' className='video-card__author-name'>
					{authorName}
					{authorIsVerified && <VerifiedBadge />}
				</a>
				<p href='#' className='video-card__details'>
					{`${formatNumberToLocalString(viewCount)} views`} - {videoPublishDate}
				</p>
			</div>
		</div>
	)
}
