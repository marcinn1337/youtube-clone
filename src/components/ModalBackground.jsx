export default function ModalBackground({ closeModal, type }) {
	return <div onClick={closeModal} className={`modal-background modal-background--${type}`}></div>
}
