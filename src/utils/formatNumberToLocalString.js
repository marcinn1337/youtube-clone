export const formatNumberToLocalString = number => {
	return parseInt(number).toLocaleString('en-US', { notation: 'compact' })
}
