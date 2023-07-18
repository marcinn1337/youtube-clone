import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HomePage from './components/HomePage'
import { ThemeProvider } from './context/ThemeContext'
import { CategoryProvider } from './context/CategoryContext'

export default function App() {
	return (
		<ThemeProvider>
			<Navbar />
			<CategoryProvider>
				<Sidebar />
				<HomePage />
			</CategoryProvider>
		</ThemeProvider>
	)
}
