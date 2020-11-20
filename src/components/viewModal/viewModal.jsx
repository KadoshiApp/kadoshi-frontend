import React from "react";

import DarkOverlay from '../darkOverlay/darkOverlay';
import './viewModal.scss';

const viewModal = ({ children, height, modal, showModal, top, left }) => {
	return (
		<>
			<DarkOverlay modal={modal} showModal={showModal} />
			<div
				className={modal ? `modal-content` : "none"}
				style={{ height, top, left }}
			>
				{children}
			</div>
		</>
	);
};

export default viewModal;
