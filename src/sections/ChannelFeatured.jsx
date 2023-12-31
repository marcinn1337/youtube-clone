import FeaturedChannelList from './FeaturedChannelList'
export default function ChannelFeatured() {
	const channelsListing = featuredChannelsData.data
	const channelListingElements = channelsListing.map((list, i) => {
		return <FeaturedChannelList key={i} title={list.title} subTitle={list.subtitle} channels={list.data} />
	})
	return <div className='channel-featured'>{channelListingElements}</div>
}
