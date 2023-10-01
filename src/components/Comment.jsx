import { useState } from 'react'
import { useReport } from '../context/ReportContext'
import Icon from './Icon'
import CommentInput from './CommentInput'
import commentReplies from '../test_data/comment-replies.json'
export default function Comment({
	type,
	authorName,
	authorId,
	avatarUrl,
	commentText,
	publishedTime,
	likesCount,
	replyCount,
	authorIsChannelOwner
}) {
	const [comment, setComment] = useState({
		hasReplies: replyCount > 0 ? true : false,
		replies: [],
		hiddenReplies: true
	})
	const openReportModal = useReport().openReportModal
	const avatarStyles = {
		backgroundImage: `url('${avatarUrl}')`
	}
	const reactToComment = e => {
		e.target.classList.toggle('active')
		if (e.target.classList.contains('comment__like-btn')) {
			e.target.nextElementSibling.classList.remove('active')
			return
		}
		e.target.previousElementSibling.classList.remove('active')
	}
	const toggleReplies = () => {
		setComment(prevComment => {
			return {
				...prevComment,
				hiddenReplies: !prevComment.hiddenReplies
			}
		})

		// Fetch replies if replies array is empty
		if (comment.hasReplies && comment.replies.length === 0) {
			const replies = commentReplies.data
			const repliesElements = commentReplies.data.map(reply => (
				<Comment
					key={reply.commentId}
					type='reply'
					authorName={reply.authorText}
					authorId={reply.authorChannelId}
					avatarUrl={reply.authorThumbnail[0].url}
					commentText={reply.textDisplay}
					publishedTime={reply.publishedTimeText}
					likesCount={reply.likesCount}
					replyCount={reply.replyCount}
					authorIsChannelOwner={reply.authorIsChannelOwner}
				/>
			))
			setComment(prevComment => {
				return {
					...prevComment,
					replies: repliesElements
				}
			})
		}
	}
	const reportComment = () => {
		// Open report modal
		openReportModal('comment')
	}
	return (
		<>
			<div
				className={`comment ${authorIsChannelOwner ? 'comment--channel-owner' : ''} ${
					type === 'reply' ? 'comment--reply' : ''
				}`}>
				<div style={avatarStyles} className='comment__author-avatar'></div>
				<div className='comment__header'>
					<a href='#' className='comment__author-name'>
						{authorName}
					</a>
					<p className='comment__publish-date'>{publishedTime}</p>
					<button onClick={reportComment} className='icon-btn comment__report-btn'>
						<Icon type='small' name='report' />
					</button>
				</div>
				<p className='comment__content'>{commentText}</p>
				<div className='comment__footer'>
					<button onClick={reactToComment} className='comment__like-btn icon-btn'>
						<Icon type='small' name='thumb-up' />
						{likesCount}
					</button>
					<button onClick={reactToComment} className='comment__dislike-btn icon-btn'>
						<Icon type='small' name='thumb-down' />
					</button>
					<button onClick={toggleReplies} className='comment__reply-btn icon-btn'>
						<Icon type='small' name='comment' />
						{comment.hiddenReplies ? 'Show' : 'Hide'} Replies ({replyCount})
					</button>
				</div>
			</div>
			{!comment.hiddenReplies && <CommentInput type='reply' />}
			{!comment.hiddenReplies && comment.replies.length > 0 && comment.replies}
		</>
	)
}
