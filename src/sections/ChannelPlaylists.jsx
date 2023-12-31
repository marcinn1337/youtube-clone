import { useState, useEffect } from 'react'
import PlaylistCard from '../components/PlaylistCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'
export default function ChannelPlaylists({ channelId }) {
	const [playlists, setPlaylists] = useState([])
	const [fetchParams, setFetchParams] = useState({
		id: channelId,
		sort_by: 'date_added'
	})
	useEffect(() => {
		// Fetching playlists
		fetchFromAPI('channel/playlists', fetchParams).then(data => {
			const playlistsCards = data.data.map(playlist => (
				<PlaylistCard
					key={playlist.playlistId}
					id={playlist.playlistId}
					thumbnailUrl={playlist.thumbnail[0].url}
					videosAmount={playlist.videoCount}
					title={playlist.title}
					lastUpdated={playlist.publishedTimeText}
				/>
			))
			setPlaylists(playlistsCards)
		})
	}, [channelId, fetchParams])
	const sortPlaylists = e => {
		// Do nothing if user clicked already active sort query
		if (e.target.classList.contains('sort-btn--active')) return
		const sortButtons = document.querySelectorAll('.sort-btn')
		sortButtons.forEach(button => {
			// Delete --active modifier from current active button
			if (button.classList.contains('sort-btn--active')) {
				button.classList.remove('sort-btn--active')
			}
		})
		// Add --modifier to button which user clicked
		e.target.classList.add('sort-btn--active')
		// Change fetch params which will rerender component and fetch playlists with new params
		let sortQuery
		if (e.target.textContent === 'Last Created') {
			sortQuery = 'date_added'
		} else {
			sortQuery = 'last_video_added'
		}
		setFetchParams(prevFetchParams => {
			return {
				...prevFetchParams,
				sort_by: sortQuery
			}
		})
	}
	return (
		<>
			<div className='channel__sort'>
				<button onClick={sortPlaylists} className='sort-btn sort-btn--active'>
					Last Created
				</button>
				<button onClick={sortPlaylists} className='sort-btn'>
					Last Updated
				</button>
			</div>
			<div className='channel-playlists'>{playlists}</div>
		</>
	)
}
