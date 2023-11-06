import PlaylistCard from '../components/PlaylistCard'
import playlistData from '../data/channel-playlists.json'
export default function ChannelPlaylists() {
	const playlistCards = playlistData.data.map(playlist => (
		<PlaylistCard
			key={playlist.playlistId}
			id={playlist.playlistId}
			thumbnailUrl={playlist.thumbnail[0].url}
			videosAmount={playlist.videoCount}
			title={playlist.title}
			lastUpdated={playlist.publishedTimeText}
		/>
	))

	return (
		<>
			<div className='channel__sort'>
				<button className='sort-btn sort-btn--active'>Last Created</button>
				<button className='sort-btn'>Last Updated</button>
			</div>
			<div className='channel-playlists'>{playlistCards}</div>
		</>
	)
}
