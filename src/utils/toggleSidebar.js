export const toggleSidebar = () => {
	console.log('toggled')
	document.querySelector('.sidebar').classList.toggle('sidebar--visible')
	document.querySelector('.main-content').classList.toggle('main-content--frozen')
}
