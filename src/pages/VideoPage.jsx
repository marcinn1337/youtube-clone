import { useTheme } from '../context/ThemeContext'
export default function VideoPage() {
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	return (
		<main className={`main-content main-content--${theme}`}>
			<div className='center-wrapper'>
				<div className='video'>
                    <div className="video__player"></div>
                    <div className="video__info">
                        <p className="video__title"></p>
                        <div className="video__author">
                            <div className="video__author-avatar"></div>
                            <p className="video__author-name"></p>
                            <p className="video__author-subscribers"></p>
                        </div>
                    </div>
                    <p className="video__description"></p>
                    <div className="video__comments"></div>
                    <div className="video__recomendations"></div>
                </div>
			</div>
		</main>
	)
}
