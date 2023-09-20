import { useState, useRef } from 'react'
export default function ShowMoreBtn({ revealPost, postIsLongCheck }) {
	const [postIsWrapped, setPostIsWrapped] = useState(false)
	const [postIsLong, setPostIsLong] = useState(false)

	setTimeout(() => {
		if (postIsLongCheck()) setPostIsLong(true)
	}, 500)
	return (
		<button
			onClick={() => {
				revealPost()
				setPostIsWrapped(prevPostIsWrapped => !prevPostIsWrapped)
			}}
			className={`community-post__reveal-btn ${postIsLong ? '' : 'community-post__reveal-btn--hidden'}`}>
			{postIsWrapped ? 'Hide' : 'Show More'}
		</button>
	)
}
