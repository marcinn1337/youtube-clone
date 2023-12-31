import { useState, useEffect } from 'react'
import Comment from '../components/Comment'
import CommentInput from '../components/CommentInput'
import { fetchFromAPI } from '../utils/fetchFromAPI'

export default function Comments({ referenceType, referenceId }) {
	const [comments, setComments] = useState([])
	useEffect(() => {
		// Fetch comments from API
		const params = { id: referenceId }
		const endPoint = referenceType === 'post' ? 'post/comments' : 'comments'
		fetchFromAPI(endPoint, params).then(data => {
			// Map comments and create HTML elements
			const mappedComments = data.data.map(comment => (
				<Comment
					key={comment.commentId}
					id={comment.commentId}
					referenceType={referenceType}
					referenceId={referenceId}
					replyToken={comment.replyToken !== undefined ? comment.replyToken : ''}
					type='comment'
					authorName={comment.authorText}
					authorId={comment.authorChannelId}
					avatarUrl={comment.authorThumbnail[0].url}
					commentText={comment.textDisplay}
					publishedTime={comment.publishedTimeText}
					likesCount={comment.likesCount}
					replyCount={comment.replyCount}
					authorIsChannelOwner={comment.authorIsChannelOwner}
				/>
			))
			setComments(mappedComments)
		})
	}, [referenceId])
	return (
		<div className='comments'>
			<CommentInput />
			{comments}
		</div>
	)
}
