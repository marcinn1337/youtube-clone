import { useState } from 'react'

import { useTheme } from '../context/ThemeContext'
import { useAlert } from '../context/AlertContext'

import VerifiedBadge from '../components/VerifiedBadge'

import ChannelVideos from '../sections/ChannelVideos'
import ChannelPlaylists from '../sections/ChannelPlaylists'
import ChannelCommunity from '../sections/ChannelCommunity'
import ChannelAbout from '../sections/ChannelAbout'
import ChannelFeatured from '../sections/ChannelFeatured'
import SearchBar from '../components/SearchBar'

import channelData from '../test_data/channel-info.json'

export default function ChannelPage() {
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	const showAlert = useAlert().showAlert
	const [activeContent, setActiveContent] = useState(<ChannelVideos />)
	const getChannelBanner = () => {
		// Pick channel banner url depending on screen size
		let url = channelData.mobileBanner[1].url
		if (window.innerWidth > 1700) {
			url = channelData.banner[5].url
		} else if (window.innerWidth > 960) {
			url = channelData.banner[2].url
		} else if (window.innerWidth > 640) {
			url = channelData.mobileBanner[2].url
		}
		return url
	}
	const styles = {
		avatar: {
			backgroundImage: `url(${channelData.avatar[1].url})`
		},
		banner: {
			backgroundImage: `url(${getChannelBanner()})`
		}
	}
	const subscribeChannel = () => {
		document.querySelector('.channel').classList.toggle('channel--subscribed')
	}
	const switchChannelContent = e => {
		// If user want to switch to content which already is active do nothing and leave the function
		if (e.target.classList.contains('active')) return

		// // Add active class to clicked btn but previously delete it from every btn to avoid highlighting more than one btn
		const navBtns = e.target.parentElement.querySelectorAll('button')
		navBtns.forEach(btn => btn.classList.remove('active'))
		e.target.classList.add('active')

		// // Set active content state to refresh page and show chosen content
		setActiveContent(prevActiveContent => {
			switch (e.target.textContent) {
				case 'videos':
					return <ChannelVideos />
					break
				case 'playlists':
					return <ChannelPlaylists />
					break
				case 'community':
					return <ChannelCommunity avatarUrl={styles.avatar.backgroundImage} />
					break
				case 'about':
					return <ChannelAbout />
					break
				case 'channels':
					return <ChannelFeatured />
					break
			}
		})
	}
	const sortChannelContent = e => {
		// Highlight clicked sort option btn by adding 'active' class
		const sortButtons = e.target.parentElement.querySelectorAll('button')
		// Remove highlight from other buttons and add it to targeted button
		sortButtons.forEach(btn => btn.classList.remove('active'))
		e.target.classList.add('active')

		// If user want to sort by latest, do nothing because it's default mode to display videos
		if (e.target.textContent === 'Latest') return
		// Sorting video not available by this API. Show pop up alert
		showAlert('error', 0)
	}
	const toggleSearchBar = e => {
		document.querySelector('.searchbar--channel').classList.toggle('searchbar--visible')
		e.target.classList.toggle('active')
	}
	return (
		<main className={`main-content main-content--${theme}`}>
			<div style={styles.banner} className='channel__banner'></div>
			<div className='center-wrapper'>
				<div className='channel'>
					<div className='channel__header'>
						<div style={styles.avatar} className='channel__avatar'></div>
						<h2 className='channel__name'>
							{channelData.title} <VerifiedBadge />
						</h2>
						<p className='channel__details'>
							{channelData.subscriberCountText} subscribers - {channelData.videosCountText} videos -{' '}
							{parseInt(channelData.viewCount).toLocaleString('en-US', { notation: 'compact' })} - views
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
						{channelData.tabs.includes('Channels') && (
							<button onClick={switchChannelContent} className='channel__nav-btn'>
								channels
							</button>
						)}
						<button onClick={switchChannelContent} className='channel__nav-btn'>
							about
						</button>
						{(activeContent.type.name === 'ChannelVideos' || activeContent.type.name === 'ChannelPlaylists') && (
							<button onClick={toggleSearchBar} className='channel__nav-btn'>
								search
							</button>
						)}
					</div>
					<SearchBar parent='channel' />
					<section className='channel__content'>{activeContent}</section>
				</div>
			</div>
		</main>
	)
}
