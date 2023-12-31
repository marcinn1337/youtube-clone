import { useState, useEffect } from 'react'
import CommunityPost from '../components/CommunityPost'
import { fetchFromAPI } from '../utils/fetchFromAPI'

export default function ChannelCommunity({ avatarUrl, channelId }) {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		// Fetch community posts
		const params = {
			id: channelId
		}
		fetchFromAPI('channel/community', params).then(data => {
			const postComponents = data.data.map(post => {
				return (
					<CommunityPost
						key={post.postId}
						postId={post.postId}
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
			setPosts(postComponents)
		})
	}, [channelId])
	return <div className='channel-community'>{posts}</div>
}
