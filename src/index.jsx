import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/sass/main.scss'

const root = createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
