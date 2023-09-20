import { useState } from 'react'
export default function FeaturedChannel({ channelId, avatarUrl, name, subscriberCount }) {
	const [isSubscribed, setIsSubscribed] = useState(false)
	const avatarUrlStyle = {
		backgroundImage: `url('${avatarUrl}')`
	}
	const toggleSubscribeButton = () => {
		setIsSubscribed(prevIsSubscribed => !prevIsSubscribed)
	}
	return (
		<div className={`featured-channel ${isSubscribed ? 'featured-channel--subscribed' : ''}`}>
			<div style={avatarUrlStyle} className='featured-channel__avatar'></div>
			<p className='featured-channel__name'>{name}</p>
			<p className='featured-channel__subscribers'>{subscriberCount} Subscribers</p>
			<button onClick={toggleSubscribeButton} className='featured-channel__subscribe-btn'></button>
		</div>
	)
}
