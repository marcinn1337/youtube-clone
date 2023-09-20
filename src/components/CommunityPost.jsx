import Icon from './Icon'
import PostPoll from './PostPoll'
import ShowMoreBtn from './ShowMoreBtn'
import Comments from '../sections/Comments'
import { useState, useRef } from 'react'
import { useReport } from '../context/ReportContext'

export default function CommunityPost({
	postId,
	postAttachment,
	authorName,
	avatarUrl,
	publishDate,
	postText,
	likesCount,
	commentsCount
}) {
	const getContent = () => {
		const contentType = postAttachment ? postAttachment.type : 'text'
		switch (contentType) {
			case 'image':
				return <img src={postAttachment.image[postAttachment.image.length - 1].url} />
			case 'poll':
				return <PostPoll votesCount={postAttachment.totalVotes} choices={postAttachment.choices} />
		}
	}

	const contentDiv = useRef(null)
	const [post, setPost] = useState({
		content: getContent(),
		contentHeight: null,
		hiddenComments: true
	})
	const openReportModal = useReport().openReportModal
	const avatarStyles = {
		backgroundImage: avatarUrl
	}

	const reactToPost = e => {
		e.target.classList.toggle('active')
		if (e.target.classList.contains('community-post__like-btn')) {
			e.target.nextElementSibling.classList.remove('active')
			return
		}
		e.target.previousElementSibling.classList.remove('active')
	}
	const revealPost = () => {
		contentDiv.current.classList.toggle('community-post__content--revealed')
	}
	const postIsLong = () => {
		// Check if contentDiv is long enough to render 'Show More' button
		const contentHeight = contentDiv.current.clientHeight
		if ((contentHeight >= 150 && window.innerWidth < 576) || (contentHeight >= 400 && window.innerWidth >= 576)) {
			return true
		}
		return false
	}
	const showComments = () => {
		setPost(prevSetPost => {
			return {
				...prevSetPost,
				hiddenComments: !prevSetPost.hiddenComments
			}
		})
	}
	const reportPost = () => {
		openReportModal('post')
	}
	return (
		<div className='community-post'>
			<div className='community-post__header'>
				<div style={avatarStyles} className='community-post__channel-avatar'></div>
				<p className='community-post__channel-name'>{authorName}</p>
				<p className='community-post__publish-date'>{publishDate}</p>
				<button onClick={reportPost} className='community-post__report-btn icon-btn'>
					<Icon type='small' name='report' />
				</button>
			</div>
			<div className='community-post__content' ref={contentDiv}>
				<p>{postText}</p>
				{post.content}
			</div>
			<ShowMoreBtn revealPost={revealPost} postIsLongCheck={postIsLong} />
			<div className='community-post__footer'>
				<button onClick={reactToPost} className='community-post__like-btn icon-btn'>
					<Icon type='small' name='thumb-up' />
					{likesCount}
				</button>
				<button onClick={reactToPost} className='community-post__dislike-btn icon-btn'>
					<Icon type='small' name='thumb-down' />
				</button>
				<button onClick={showComments} className='community-post__show-comments-btn icon-btn'>
					<Icon type='small' name='comment' />
					{`${post.hiddenComments ? 'Show' : 'Hide'}`} Comments ({commentsCount})
				</button>
			</div>
			{!post.hiddenComments && <Comments postId={postId} />}
		</div>
	)
}
