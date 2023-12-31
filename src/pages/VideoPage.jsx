import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useAlert } from '../context/AlertContext'
import { useReport } from '../context/ReportContext'
import Comments from '../sections/Comments'
import Icon from '../components/Icon'
import VideoCard from '../components/VideoCard'
import ModalBackground from '../components/ModalBackground'
import VerifiedBadge from '../components/VerifiedBadge'

import { formatText } from '../utils/formatText'
import { formatNumberToLocalString } from '../utils/formatNumberToLocalString'
import { fetchFromAPI } from '../utils/fetchFromAPI'

export default function VideoPage() {
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	const showAlert = useAlert().showAlert
	const openReportModal = useReport().openReportModal
	const [video, setVideo] = useState({
		description: '',
		id: '',
		title: '',
		channelId: '',
		channelBadges: [''],
		channelTitle: '',
		viewCount: 0,
		subscriberCountText: '',
		commentCount: 0,
		channelThumbnail: [{ url: '' }],
		relatedVideos: { data: [] }
	})
	const [visibleComponents, setVisibleComponents] = useState({
		actionsList: false,
		comments: false
	})
	let { videoId } = useParams()
	useEffect(() => {
		// Fetching data...
		const params = {
			id: videoId,
			extend: '1'
		}
		fetchFromAPI('video/info', params).then(data => {
			setVideo({
				...data,
				channelBadges: data.channelBadges === null ? [] : data.channelBadges,
				commentCount: data.commentCount === null ? 0 : data.commentCount
			})
		})
	}, [videoId])

	const avatarUrlStyle = {
		backgroundImage: `url(${video.channelThumbnail[video.channelThumbnail.length - 1].url})`
	}
	const showDescription = e => {
		// Show whole description by adding --visible class modifier
		document.querySelector('.video__description-text').classList.toggle('video__description-text--visible')

		// Toggle button text from "...more" to "...hide"
		if (e.target.textContent === '...more') {
			e.target.textContent = '...hide'
			return
		}
		e.target.textContent = '...more'
	}
	const subscribeChannel = e => {
		document.querySelector('.video__author').classList.toggle('video__author--subscribed')
		if (e.target.textContent === 'Subscribe') {
			e.target.textContent = 'Unsubscribe'
			return
		}
		e.target.textContent = 'Subscribe'
	}
	const reactToVideo = e => {
		const video = document.querySelector('.video')
		// If user like video, remove 'disliked' class modifier and toggle 'like' class modifier
		if (e.target.classList.contains('video__actions-like-btn')) {
			video.classList.remove('video--disliked')
			video.classList.toggle('video--liked')
			return
		}
		// For disliking video = Opposite to the upper instructions
		video.classList.remove('video--liked')
		video.classList.toggle('video--disliked')
	}
	const toggleMoreActionsMenu = () => {
		setVisibleComponents(prevVisibleComponents => {
			return {
				...prevVisibleComponents,
				actionsList: !prevVisibleComponents.actionsList
			}
		})
	}
	const toggleCommentsList = () => {
		setVisibleComponents(prevVisibleComponents => {
			return {
				...prevVisibleComponents,
				comments: !prevVisibleComponents.comments
			}
		})
	}
	const recommendedVideoCards = video.relatedVideos.data.map(video => (
		<VideoCard
			key={video.videoId}
			videoId={video.videoId}
			thumbnailUrl={video.thumbnail[video.thumbnail.length - 1].url}
			videoTitle={video.title}
			authorName={video.channelTitle}
			authorId={video.channelId}
			authorIsVerified={null}
			authorAvatarUrl={video.channelThumbnail[0].url}
			videoPublishDate={video.publishedTimeText}
			viewCount={parseInt(video.viewCount)}
			videoLength={video.lengthText}
		/>
	))
	const showErrorAlert = e => {
		showAlert('error', 2)
	}
	return (
		<main className={`main-content main-content--${theme}`}>
			<div className='video'>
				<div className='center-wrapper'>
					<div className='video__player'>
						<iframe
							src={`https://www.youtube-nocookie.com/embed/${video.id}?si=lKa5EECXqIa62bzg`}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen={true}></iframe>
					</div>
					<p className='video__title'>{video.title}</p>
					<div className='video__description'>
						<span className='video__description-views'>{formatNumberToLocalString(video.viewCount)} Views</span>
						<span className='video__description-publish-date'>
							{new Date(video.uploadDate).toLocaleDateString('en-us', {
								year: 'numeric',
								month: 'short',
								day: '2-digit'
							})}
						</span>
						<button onClick={showDescription} className='video__description-more-btn'>
							...more
						</button>
						<p
							// Format text by replacing breaklines and links to html tags
							dangerouslySetInnerHTML={{ __html: formatText(video.description) }}
							className='video__description-text'></p>
					</div>
					<div className='video__author'>
						<Link style={avatarUrlStyle} className='video__author-avatar' to={`/channel/${video.channelId}`}></Link>
						<Link className='video__author-name' to={`/channel/${video.channelId}`}>
							{video.channelTitle}
							{video.channelBadges.includes('Verified') && <VerifiedBadge />}
						</Link>
						<p className='video__author-subscribers'>{video.subscriberCountText}</p>
						<button onClick={subscribeChannel} className='video__author-subscribe-btn cta-btn'>
							Subscribe
						</button>
					</div>
					<div className='video__actions'>
						<button onClick={reactToVideo} className='video__actions-like-btn'>
							<Icon type='small' name='thumb-up' />
							{formatNumberToLocalString(video.likeCount)}
						</button>
						<button onClick={reactToVideo} className='video__actions-dislike-btn'>
							<Icon type='small' name='thumb-down' />
						</button>
						<button onClick={toggleMoreActionsMenu} className='video__actions-more-btn'>
							<Icon type='small' name='more-vertical' />
						</button>
						{visibleComponents.actionsList && (
							<>
								<ModalBackground closeModal={toggleMoreActionsMenu} />
								<div className='video__actions-more'>
									<button onClick={showErrorAlert} className='video__actions-save-btn'>
										<Icon type='small' name='add-to-playlist' />
										Save
									</button>
									<button onClick={showErrorAlert} className='video__actions-share-btn'>
										<Icon type='small' name='share' />
										Share
									</button>
									<button
										onClick={() => {
											openReportModal('video')
										}}
										className='video__actions-report-btn'>
										<Icon type='small' name='report' />
										Report
									</button>
								</div>
							</>
						)}
					</div>
					<button onClick={toggleCommentsList} className='video__show-comments-btn'>
						Comments {formatNumberToLocalString(video.commentCount)}{' '}
						<Icon type='small' name={visibleComponents.comments ? 'chevron-up' : 'chevron-down'} />
					</button>
					{visibleComponents.comments && <Comments referenceType='video' referenceId={videoId} />}
					<div className='video__recommendations'>{recommendedVideoCards}</div>
				</div>
			</div>
		</main>
	)
}
