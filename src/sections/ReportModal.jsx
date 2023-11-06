import { useState, useEffect } from 'react'
import { useAlert } from '../context/AlertContext'
import { useTheme } from '../context/ThemeContext'
import { useReport } from '../context/ReportContext'
import reportOptions from '../data/report-options.json'
import ReportOption from '../components/ReportOption'
import ModalBackground from '../components/ModalBackground'

export default function ReportModal() {
	const [report, setReport] = useState({
		selectedOptions: []
	})
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	const showAlert = useAlert().showAlert
	const closeModal = useReport().closeReportModal
	const referenceType = useReport().reportModal.reference
	let checkboxElements = []
	const selectCheckbox = (optionValue, e) => {
		// Add selected option to report state
		if (e.target.checked) {
			setReport(prevReport => {
				return {
					selectedOptions: [...prevReport.selectedOptions, optionValue]
				}
			})
			return
		}

		// If user want to unselect option. Delete it from report state
		setReport(prevReport => {
			return {
				selectedOptions: prevReport.selectedOptions.filter(option => option !== optionValue)
			}
		})
	}
	const createCheckboxElements = () => {
		// Init array to collect needed options
		let optionsArray = []

		// Add options to form depending on what user want to report
		if (referenceType === 'post' || referenceType === 'comment') {
			optionsArray = [...reportOptions.defaultReportOptions, ...reportOptions.commentPostReportOptions]
		} else {
			optionsArray = [...reportOptions.defaultReportOptions, ...reportOptions.videoReportOptions]
		}

		// Map options, create options HTML elements and assign them to optionsElements
		checkboxElements = optionsArray.map((option, i) => (
			<ReportOption
				key={i}
				id={i}
				optionValue={option.value}
				toolTipText={option.toolTipText}
				selectCheckboxFunction={selectCheckbox}
			/>
		))
	}
	const closeReportModal = () => {
		setReport({ selectedOptions: [] })
		closeModal()
	}
	const sendReport = () => {
		// If user didn't select any option, show error message in alert box
		if (report.selectedOptions.length === 0) {
			showAlert('error', 1)
			return
		}
		// Show success message in alert box and close report modal
		showAlert('success', 0)
		closeReportModal()
	}
	createCheckboxElements()
	// Don't render modal until user want to open it by clicking report btn
	if (useReport().reportModal.isHidden) return null
	return (
		<>
			<ModalBackground closeModal={closeReportModal} type='shadow' />
			<div className={`report-modal report-modal--${theme}`}>
				<h2 className='report-modal__header'>Report {referenceType}</h2>
				<div className='report-modal__form'>{checkboxElements}</div>
				<div className='report-modal__footer'>
					<button onClick={closeReportModal} className='report-modal__cancel-btn'>
						cancel
					</button>
					<button onClick={sendReport} className='report-modal__report-btn cta-btn'>
						report
					</button>
				</div>
			</div>
		</>
	)
}
