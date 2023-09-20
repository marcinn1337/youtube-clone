export const toggleScrollableBody = () => {
	// Function that toggle --frozen modifier and make main-content unscrollable / scrollable
	document.querySelector('.main-content').classList.toggle('main-content--frozen')
}
