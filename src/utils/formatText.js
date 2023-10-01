export const formatText = text => {
	const linkRegEx =
		/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
	const breakLineRegEx = /(?:\r\n|\r|\n)/g
	// Replace "/n" breaklines to <br> html tags
	let formattedText = text.replace(breakLineRegEx, ' <br>')
	// Replace all links to anchor html tags
	formattedText = formattedText.replace(linkRegEx, '<a target="_blank" href="$&">$&</a>')
	return formattedText
}
