import { useState, useContext, createContext } from 'react'
import { toggleScrollableBody } from '../utils/toggleScrollableBody'
import { toggleSidebar } from '../utils/toggleSidebar'

const ReportContext = createContext()
export const useReport = () => useContext(ReportContext)

export function ReportProvider({ children }) {
	const [reportModal, setReportModal] = useState({
		isHidden: true,
		reference: null
	})
	const openReportModal = reference => {
		setReportModal(prevReportModal => {
			return {
				isHidden: false,
				reference
			}
		})
		toggleScrollableBody()
		if (document.querySelector('.sidebar').classList.contains('sidebar--visible')) toggleSidebar()
	}
	const closeReportModal = () => {
		setReportModal(prevReportModal => {
			return {
				isHidden: true,
				reference: null
			}
		})
		toggleScrollableBody()
	}
	return (
		<ReportContext.Provider value={{ reportModal, openReportModal, closeReportModal }}>
			{children}
		</ReportContext.Provider>
	)
}
