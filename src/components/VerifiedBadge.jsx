import { getIcon } from '../utils/getIcon'

export default function VerifiedBadge() {
	return (
		<div className='badge'>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
				<path d={getIcon('Check')} />
			</svg>
		</div>
	)
}
