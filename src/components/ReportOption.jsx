import Icon from './Icon'
export default function ReportOption({ id, optionValue, toolTipText, selectCheckboxFunction }) {
	return (
		<div className='report-modal__option'>
			<input
				id={id}
				type='checkbox'
				className='report-modal__option-check'
				onClick={e => {
					selectCheckboxFunction(optionValue, e)
				}}
			/>
			<label className='report-modal__option-label' htmlFor={id}>
				{optionValue}
			</label>
			{toolTipText && (
				<button className='report-modal__option-help-btn'>
					<Icon type='small' name='help-square' />
					<span className='tooltip'>{toolTipText}</span>
				</button>
			)}
		</div>
	)
}
