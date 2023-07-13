import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HomePage from './components/HomePage'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
	return (
		<ThemeProvider>
			<Navbar />
			<Sidebar />
			<HomePage />
		</ThemeProvider>
	)
}
