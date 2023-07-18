import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CategorySection from './components/CategorySection'
import SearchResultsPage from './pages/SearchResultsPage'
import { ThemeProvider } from './context/ThemeContext'
import { CategoryProvider } from './context/CategoryContext'

export default function App() {
	return (
		<ThemeProvider>
			<Navbar />
			<CategoryProvider>
				<Sidebar />
				{/* <CategorySection /> */}
				<SearchResultsPage />
			</CategoryProvider>
		</ThemeProvider>
	)
}
