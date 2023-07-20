import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CategoryPage from './pages/CategoryPage'
import SearchResultsPage from './pages/SearchResultsPage'
import { ThemeProvider } from './context/ThemeContext'
import { CategoryProvider } from './context/CategoryContext'

export default function App() {
	return (
		<ThemeProvider>
			<Navbar />
			<CategoryProvider>
				<Sidebar />
				<Routes>
					<Route path='/' element={<CategoryPage />} />
					<Route path='/search' element={<SearchResultsPage />} />
				</Routes>
			</CategoryProvider>
		</ThemeProvider>
	)
}
