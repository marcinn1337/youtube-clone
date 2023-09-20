export default function PostPoll({ votesCount, choices }) {
	const choseOption = e => {
		const allChoices = e.target.parentElement.querySelectorAll('button')

		allChoices.forEach(choice => {
			if (choice.classList.contains('post-poll__choice--chosen')) {
				choice.classList.remove('post-poll__choice--chosen')
				return
			}
			choice === e.target ? choice.classList.add('post-poll__choice--chosen') : null
		})
	}
	const choicesBtns = choices.map((choice, i) => (
		<button key={i} onClick={choseOption} className='post-poll__choice'>
			{choice}
		</button>
	))
	return (
		<div className='post-poll'>
			<p className='post-poll__votes'>{votesCount}</p>
			{choicesBtns}
		</div>
	)
}
