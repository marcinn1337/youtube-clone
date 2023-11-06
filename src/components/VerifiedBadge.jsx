import Icon from './Icon'
export default function VerifiedBadge() {
	return (
		<div className='badge'>
			<Icon type='small' name='check' />
			<span className='tooltip'>Channel Verified</span>
		</div>
	)
}
