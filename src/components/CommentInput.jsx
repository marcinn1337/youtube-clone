import Icon from './Icon'
export default function CommentInput({ type }) {
	return (
		<div className={`comment-input ${type === 'reply' ? 'comment-input--reply' : ''}`}>
			<div className='comment-input__user-avatar'></div>
			<textarea className='comment-input__textarea' placeholder='Add comment' maxLength={800} />
			<button className='icon-btn'>
				<Icon type='small' name='add-comment' /> Add
			</button>
		</div>
	)
}
