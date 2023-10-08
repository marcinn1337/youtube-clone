import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import ChannelPage from './pages/ChannelPage'
import VideoPage from './pages/VideoPage'
import SearchResultsPage from './pages/SearchResultsPage'
import AlertBox from './components/AlertBox'
import ReportModal from './sections/ReportModal'
import { ThemeProvider } from './context/ThemeContext'
import { CategoryProvider } from './context/CategoryContext'
import { AlertProvider } from './context/AlertContext'
import { ReportProvider } from './context/ReportContext'

export default function App() {
	return (
		<ThemeProvider>
			<Navbar />
			<CategoryProvider>
				<Sidebar />
				<AlertProvider>
					<ReportProvider>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/search' element={<SearchResultsPage />} />
							<Route path='/channel' element={<ChannelPage />} />
							<Route path='/video' element={<VideoPage />} />
						</Routes>
						<ReportModal />
						<AlertBox />
					</ReportProvider>
				</AlertProvider>
			</CategoryProvider>
		</ThemeProvider>
	)
}
