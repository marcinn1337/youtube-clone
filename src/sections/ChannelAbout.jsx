import ChannelLink from '../components/ChannelLink'
import { formatNumberToLocalString } from '../utils/formatNumberToLocalString'
export default function ChannelAbout({ channel }) {
	const linkElements =
		channel.links &&
		channel.links.map(({ title, link }, i) => {
			return <ChannelLink key={i} title={title} link={link} />
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
				<p>{formatNumberToLocalString(channel.viewCount)} views</p>
				<p>{formatNumberToLocalString(channel.subscriberCount)} subscribers</p>
				<p>{formatNumberToLocalString(channel.videosCount)} videos</p>
			</section>
			<section className='channel-about__links'>
				<h4>Links</h4>
				{linkElements}
			</section>
		</div>
	)
}
