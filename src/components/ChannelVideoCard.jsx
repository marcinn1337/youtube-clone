import { useState } from 'react'
import Icon from './Icon'
import ModalBackground from './ModalBackground'
import {formatNumberToLocalString} from '../utils/formatNumberToLocalString'
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
					{`${formatNumberToLocalString(views)} views`} - {publishDate}
				</p>
			</div>
		</div>
	)
}

