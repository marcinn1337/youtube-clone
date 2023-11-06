import CommunityPost from '../components/CommunityPost'
import communityData from '../data/channel-community.json'

export default function ChannelCommunity({ avatarUrl }) {
	const postCards = communityData.data.map(post => {
		return (
			<CommunityPost
				key={post.postId}
				postAttachment={post.attachment}
				authorName={post.authorText}
				avatarUrl={avatarUrl}
				publishDate={post.publishedTimeText}
				postText={post.contentText}
				likesCount={post.voteCountText}
				commentsCount={post.replyCount}
			/>
		)
	})
	return <div className='channel-community'>{postCards}</div>
}
