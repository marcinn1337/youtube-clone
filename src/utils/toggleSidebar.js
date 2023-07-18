export const toggleSidebar = () => {
    document.querySelector('.sidebar').classList.toggle('sidebar--visible')
    document.querySelector('.section').classList.toggle('section--frozen')
}