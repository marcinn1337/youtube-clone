import { useState } from 'react'
import { useAlert } from '../context/AlertContext'
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
	authorId,
	authorIsVerified,
	authorAvatarUrl,
	videoPublishDate,
	viewCount,
	videoLength
}) {
	const showAlert = useAlert().showAlert
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
	const showErrorAlert = e => {
		e.preventDefault()
		showAlert('error', 2)
	}
	return (
		<div className={`video-card ${isTouchscreenEnabled() ? 'video-card--onmobile' : ''}`}>
			<Link to={`/video/${videoId}`} className='video-card__thumbnail' style={thumbnailUrlStyle}>
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
						<button onClick={showErrorAlert}>
							<Icon type='small' name='clock' />
							Watch later
						</button>
						<button onClick={showErrorAlert}>
							<Icon type='small' name='add-to-queue' />
							Add to queue
						</button>
						<button onClick={showErrorAlert}>
							<Icon type='small' name='add-to-playlist' />
							Save to playlist
						</button>
						<button onClick={showErrorAlert}>
							<Icon type='small' name='share' />
							Share
						</button>
						<button onClick={showErrorAlert}>
							<Icon type='small' name='block' />
							Not interested
						</button>
					</div>
				)}
				{/* If video is currently live, highlight the length label by adding green color */}
				<span
					className={
						videoLength === 'LIVE'
							? `video-card__duration video-card__duration video-card__duration--highlighted`
							: `video-card__duration`
					}>
					{videoLength}
				</span>
			</Link>
			<div className='video-card__info'>
				<Link to={`/channel/${authorId}`} className='video-card__author-avatar' style={avatarUrlStyle}></Link>
				<Link to={`/video/${videoId}`} className='video-card__title'>
					{videoTitle}
				</Link>
				<Link to={`/channel/${authorId}`} className='video-card__author-name'>
					{' '}
					{authorName}
					{authorIsVerified && <VerifiedBadge />}
				</Link>
				<p href='#' className='video-card__details'>
					{`${formatNumberToLocalString(viewCount)} views`} - {videoPublishDate}
				</p>
			</div>
		</div>
	)
}
