import channelInfo from '../test_data/channel-info.json'
import ChannelLink from '../components/ChannelLink'
import { useState } from 'react'
export default function ChannelAbout() {
	const [channel, setChannel] = useState({
		description: channelInfo.description,
		joinedDate: channelInfo.joinedDate,
		viewCount: channelInfo.viewCount,
		videosCount: channelInfo.videosCount,
		subscriberCount: channelInfo.subscriberCount,
		links: channelInfo.links
	})

	const linkElements =
		channel.links &&
		channel.links.map(({ title, link }) => {
			return <ChannelLink title={title} link={link} />
		})
	return (
		<div className='channel-about'>
			<section className='channel-about__description'>
				<h4>Description</h4>
				<p className='channel-about__description-text'>{channel.description}</p>
			</section>
			<section className='channel-about__stats'>
				<h4>Statistics</h4>
				<p>
					Joined{' '}
					{new Date(channel.joinedDate).toLocaleDateString('en-us', {
						year: 'numeric',
						month: 'short',
						day: '2-digit'
					})}
				</p>
				<p>{parseInt(channel.viewCount).toLocaleString('en-us', { notation: 'standard' })} views</p>
				<p>{parseInt(channel.subscriberCount).toLocaleString('en-us', { notation: 'standard' })} subscribers</p>
				<p>{parseInt(channel.videosCount).toLocaleString('en-us', { notation: 'standard' })} videos</p>
			</section>
			<section className='channel-about__links'>
				<h4>Links</h4>
				{linkElements}
			</section>
		</div>
	)
}
