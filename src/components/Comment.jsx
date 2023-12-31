import { useState, useEffect } from 'react'
import { useReport } from '../context/ReportContext'
import Icon from './Icon'
import CommentInput from './CommentInput'
import { fetchFromAPI } from '../utils/fetchFromAPI'
export default function Comment({
	id,
	referenceType,
	referenceId,
	replyToken,
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
		id: id,
		reactionState: null,
		isReply: type === 'reply' ? true : false,
		hasReplies: replyCount > 0 ? true : false,
		replies: [],
		hiddenReplies: true
	})

	const openReportModal = useReport().openReportModal
	const avatarStyles = {
		backgroundImage: `url('${avatarUrl}')`
	}
	const reactToComment = e => {
		let reactionState = comment.reactionState
		if (e.target.classList.contains('comment__like-btn')) {
			reactionState = reactionState === 'liked' ? null : 'liked'
		} else if (e.target.classList.contains('comment__dislike-btn')) {
			reactionState = reactionState === 'disliked' ? null : 'disliked'
		}
		setComment(prevComment => {
			return {
				...prevComment,
				reactionState: reactionState
			}
		})
	}
	const toggleReplies = () => {
		// Fetch replies if replies array is empty and comment replies count is more than 0
		if (comment.hasReplies && comment.replies.length === 0) {
			const params = {
				id: referenceId,
				token: replyToken
			}
			const endPoint = referenceType === 'post' ? 'post/comments' : 'comments'
			fetchFromAPI(endPoint, params).then(data => {
				setComment(prevComment => {
					return {
						...prevComment,
						hiddenReplies: false,
						replies: data.data.map(reply => (
							<Comment
								key={reply.commentId}
								id={reply.commentId}
								referenceId={referenceId}
								replyToken=''
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
					}
				})
			})
		} else {
			setComment(prevComment => {
				return {
					...prevComment,
					hiddenReplies: !prevComment.hiddenReplies
				}
			})
		}
	}
	return (
		<>
			<div
				className={`comment${authorIsChannelOwner ? ' comment--channel-owner' : ''}${
					comment.isReply ? ' comment--reply' : ''
				}${comment.reactionState === 'liked' ? ' comment--liked' : ''}${
					comment.reactionState === 'disliked' ? ' comment--disliked' : ''
				}`}>
				<div style={avatarStyles} className='comment__author-avatar'></div>
				<div className='comment__header'>
					<a href='#' className='comment__author-name'>
						{authorName}
					</a>
					<p className='comment__publish-date'>{publishedTime}</p>
					<button
						onClick={() => {
							openReportModal('comment')
						}}
						className='icon-btn comment__report-btn'>
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
