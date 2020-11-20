import React from "react";
import './darkOverlay.scss';

const DarkOverlay = ({ modal, showModal }) => {
	return (
		<div
			className={modal ? "overlay" : "none"}
			onClick={() => showModal()}
		></div>
	);
};

export default DarkOverlay;
