import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { formatNumberToLocalString } from '../utils/formatNumberToLocalString'
import VerifiedBadge from '../components/VerifiedBadge'
import { fetchFromAPI } from '../utils/fetchFromAPI'

import ChannelVideos from '../sections/ChannelVideos'
import ChannelPlaylists from '../sections/ChannelPlaylists'
import ChannelCommunity from '../sections/ChannelCommunity'
import ChannelAbout from '../sections/ChannelAbout'
import ChannelFeatured from '../sections/ChannelFeatured'
import VideoCard from '../components/VideoCard'
import PlaylistCard from '../components/PlaylistCard'
import SearchBar from '../components/SearchBar'

export default function ChannelPage() {
	let { channelId } = useParams()
	const theme = useTheme().darkTheme ? 'dark' : 'light'

	const [channel, setChannel] = useState({
		isFetched: false,
		title: '',
		description: '',
		channelHandle: '',
		banner: [{ url: '', width: 0, height: 0 }],
		tvBanner: [{ url: '', width: 0, height: 0 }],
		mobileBanner: [{ url: '', width: 0, height: 0 }],
		avatar: [{ url: '', width: 0, height: 0 }],
		subscriberCountText: '0',
		subscriberCount: 0,
		viewCountText: '0 views',
		viewCount: 0,
		isVerified: false,
		tabs: [],
		country: '',
		joinedDateText: '',
		joinedDate: '',
		links: [
			{
				title: '',
				link: '',
				favicon: [
					{
						url: '',
						width: 0,
						height: 0
					}
				]
			}
		]
	})
	const [activeContent, setActiveContent] = useState(
		<ChannelVideos
			author={{
				id: channelId,
				title: channel.title
			}}
		/>
	)
	const [search, setSearch] = useState({
		resultsAreFetched: false,
		resultsAreHidden: true,
		results: []
	})
	useEffect(() => {
		// Fetching data...
		const params = {
			id: channelId
		}
		fetchFromAPI('channel/about', params).then(data => {
			setChannel({
				...data,
				isFetched: true,
				channelBadges: data.channelBadges === null ? [] : data.channelBadges,
				commentCount: data.commentCount === null ? 0 : data.commentCount
			})
		})
	}, [channelId])
	const getChannelBannerUrl = () => {
		// Pick channel banner with the appropriate resolution depending on the screen size
		let url = channel.mobileBanner.length >= 2 ? channel.mobileBanner[1].url : channel.mobileBanner[0].url
		if (window.innerWidth > 1700 && channel.banner.length >= 6) {
			url = channel.banner[5].url
		} else if (window.innerWidth > 960 && channel.banner.length >= 3) {
			url = channel.banner[2].url
		} else if (window.innerWidth > 640 && channel.mobileBanner.length >= 3) {
			url = channel.mobileBanner[2].url
		}
		return url
	}
	const styles = {
		avatar: {
			backgroundImage: `url(${channel.avatar.length >= 2 ? channel.avatar[1].url : channel.avatar[0].url})`
		},
		banner: {
			backgroundImage: `url(${getChannelBannerUrl()})`
		}
	}
	const subscribeChannel = () => {
		document.querySelector('.channel').classList.toggle('channel--subscribed')
	}
	const switchChannelContent = e => {
		// If user want to switch to content which already is active do nothing and leave the function
		if (e.target.classList.contains('active')) return

		// Add active class to clicked btn but previously delete it from every btn to avoid highlighting more than one btn
		const navBtns = e.target.parentElement.querySelectorAll('button')
		navBtns.forEach(btn => btn.classList.remove('active'))
		e.target.classList.add('active')

		// Set active content state to refresh page and show chosen content
		setActiveContent(prevActiveContent => {
			switch (e.target.textContent) {
				case 'videos':
					return (
						<ChannelVideos
							author={{
								id: channelId,
								title: channel.title
							}}
						/>
					)
					break
				case 'playlists':
					return <ChannelPlaylists channelId={channelId} />
					break
				case 'community':
					return <ChannelCommunity channelId={channelId} avatarUrl={styles.avatar.backgroundImage} />
					break
				case 'about':
					return <ChannelAbout channel={channel} />
					break
				case 'channels':
					return <ChannelFeatured channelId={channelId} />
					break
			}
		})
		setSearch({ resultsAreFetched: false, resultsAreHidden: true, results: [] })
	}

	const toggleSearchBar = e => {
		document.querySelector('.searchbar--channel').classList.toggle('searchbar--visible')
		e.target.classList.toggle('active')
	}
	const toggleSearchResults = () => {
		setSearch(prevSearch => {
			return {
				...prevSearch,
				resultsAreHidden: !prevSearch.resultsAreHidden
			}
		})
	}
	const initSearch = query => {
		fetchFromAPI('channel/search', {
			id: channelId,
			query
		}).then(data => {
			setSearch(prevSearch => {
				let resultCards
				if (activeContent.type.name === 'ChannelVideos') {
					const videos = data.data.filter(result => result.type === 'video')
					resultCards = videos.map(video => (
						<VideoCard
							key={video.videoId}
							videoId={video.videoId}
							thumbnailUrl={video.thumbnail[3].url}
							videoTitle={video.title}
							authorName=''
							authorId=''
							authorIsVerified={null}
							authorAvatarUrl={null}
							videoPublishDate={video.publishedTimeText}
							viewCount={parseInt(video.viewCount)}
							videoLength={video.lengthText}
						/>
					))
				} else {
					const playlists = data.data.filter(result => result.type === 'playlist')
					resultCards = playlists.map(playlist => (
						<PlaylistCard
							key={playlist.playlistId}
							id={playlist.playlistId}
							thumbnailUrl={playlist.thumbnail[0].url}
							videosAmount={playlist.videoCount}
							title={playlist.title}
							lastUpdated=''
						/>
					))
				}
				return {
					...prevSearch,
					resultsAreFetched: true,
					resultsAreHidden: false,
					results: resultCards
				}
			})
		})
	}
	if (!channel.isFetched) return null
	return (
		<main className={`main-content main-content--${theme}`}>
			<div style={styles.banner} className='channel__banner'></div>
			<div className='center-wrapper'>
				<div className='channel'>
					<div className='channel__header'>
						<div style={styles.avatar} className='channel__avatar'></div>
						<h2 className='channel__name'>
							{channel.title} <VerifiedBadge />
						</h2>
						<p className='channel__details'>
							{channel.subscriberCountText} subscribers - {channel.videosCountText}-{' '}
							{formatNumberToLocalString(channel.viewCount)} - views
						</p>
						<button onClick={subscribeChannel} className='channel__subscribe-btn cta-btn'></button>
					</div>
					<div className='channel__nav'>
						<button onClick={switchChannelContent} className='channel__nav-btn active'>
							videos
						</button>
						<button onClick={switchChannelContent} className='channel__nav-btn'>
							playlists
						</button>
						<button onClick={switchChannelContent} className='channel__nav-btn'>
							community
						</button>
						<button onClick={switchChannelContent} className='channel__nav-btn'>
							about
						</button>
						{(activeContent.type.name === 'ChannelVideos' || activeContent.type.name === 'ChannelPlaylists') && (
							<button onClick={toggleSearchBar} className='channel__nav-btn'>
								search
							</button>
						)}
					</div>
					<SearchBar initSearch={initSearch} parent='channel' />
					{search.resultsAreFetched && (
						<section className='channel__search-results'>
							<h3>
								search results{' '}
								<button onClick={toggleSearchResults}>{search.resultsAreHidden ? 'show' : 'hide'}</button>
							</h3>
							{!search.resultsAreHidden && (
								<>
									<span>{search.results.length} results matched your query</span>
									<div>{search.results}</div>
								</>
							)}
						</section>
					)}
					<section className='channel__content'>{activeContent}</section>
				</div>
			</div>
		</main>
	)
}
