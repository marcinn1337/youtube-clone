import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import Icon from '../components/Icon'
import VideoCard from '../components/VideoCard'
import videoDetailsData from '../test_data/video-details.json'
import Comments from '../sections/Comments'
import { formatText } from '../utils/formatText'
import ModalBackground from '../components/ModalBackground'
export default function VideoPage() {
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	const [video, setVideo] = useState(videoDetailsData)
	const [visibleComponents, setVisibleComponents] = useState({
		actionsList: false,
		comments: false
	})
	const avatarUrlStyle = {
		backgroundImage: `url(${video.channelThumbnail[0].url})`
	}
	const showDescription = e => {
		// Show whole description by adding --visible class modifier
		document.querySelector('.video__description-text').classList.toggle('video__description-text--visible')

		// Toggle button text ...more / ...hide
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
	const recommendedVideosElements = videoDetailsData.relatedVideos.data.map(video => (
		<VideoCard
			key={video.videoId}
			videoTitle={video.title}
			channelName={video.channelTitle}
			thumbnailUrl={video.thumbnail[1].url}
			publishDate={video.publishedTimeText}
			views={parseInt(video.viewCount).toLocaleString('en-US', { notation: 'compact' })}
			avatarUrl={video.channelThumbnail[0].url}
		/>
	))
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
						<span className='video__description-views'>
							{parseInt(video.viewCount).toLocaleString('en-US', { notation: 'compact' })} Views
						</span>
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
						<a style={avatarUrlStyle} className='video__author-avatar'></a>
						<a className='video__author-name'>{video.channelTitle}</a>
						<p className='video__author-subscribers'>
							{parseInt(video.subscriberCount).toLocaleString('en-US', { notation: 'compact' })} Subscribers
						</p>
						<button onClick={subscribeChannel} className='video__author-subscribe-btn cta-btn'>
							Subscribe
						</button>
					</div>
					<div className='video__actions'>
						<button onClick={reactToVideo} className='video__actions-like-btn'>
							<Icon type='small' name='thumb-up' />
							{parseInt(video.likeCount).toLocaleString('en-US', { notation: 'compact' })}
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
									<button className='video__actions-save-btn'>
										<Icon type='small' name='add-to-playlist' />
										Save
									</button>
									<button className='video__actions-share-btn'>
										<Icon type='small' name='share' />
										Share
									</button>
									<button className='video__actions-report-btn'>
										<Icon type='small' name='report' />
										Report
									</button>
								</div>
							</>
						)}
					</div>
					<button onClick={toggleCommentsList} className='video__show-comments-btn'>
						Comments {parseInt(video.commentCount).toLocaleString('en-US', { notation: 'compact' })}{' '}
						<Icon type='small' name={visibleComponents.comments ? 'chevron-up' : 'chevron-down'} />
					</button>
					{visibleComponents.comments && <Comments />}
					<div className='video__recommendations'>{recommendedVideosElements}</div>
				</div>
			</div>
		</main>
	)
}
