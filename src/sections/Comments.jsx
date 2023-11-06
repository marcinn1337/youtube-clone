import Comment from '../components/Comment'
import postComments from '../data/post-comments.json'
import CommentInput from '../components/CommentInput'
export default function Comments() {
	const commentsElements = postComments.data.map(comment => (
		<Comment
			key={comment.commentId}
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
	return (
		<div className='comments'>
			<CommentInput />
			{commentsElements}
		</div>
	)
}
