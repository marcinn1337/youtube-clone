import FeaturedChannel from '../components/FeaturedChannel'

export default function ChannelFeaturedList({ title, subtitle, channels }) {
	const channelsElements = channels.map(channel => (
		<FeaturedChannel
			key={channel.channelId}
			channelId={channel.channelId}
			avatarUrl={channel.thumbnail[1].url}
			name={channel.title}
			subscriberCount={channel.subscriberCount}
		/>
	))
	return (
		<div className='channel-featured__list'>
			<h4 className='channel-featured__list-title'>{title}</h4>
			{subtitle ?? <h6 className='channel-featured-list-subtite'>{subtitle}</h6>}
			<div className='channel-featured__list-content'>{channelsElements}</div>
		</div>
	)
}
