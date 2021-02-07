import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { loading } from '../../redux/loading/loading.action'
import { updateProfessional } from "../../redux/Professionals/professionals.actions";
import { errorMessage, successMessage } from '../../redux/message/message.action'
import Axios from '../../Axios.config';

import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";

const DropzoneDialogExample = ({ figure, userSlug }) => {
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false)
	const [files, setFiles] = useState([]);

	const handleClose = () => {
		setOpen(false);
		console.log(files);
	}

	const handleSave = (files) => {
		//Saving files to state for further use and closing Modal.
		setFiles(files);
		setOpen(false);
		uploadImage(files);
	}

	const uploadImage = async (file) => {
		const data = new FormData();
		data.append("file", file[0]);
		data.append("upload_preset", "kadoshiprofessionals");
		dispatch(loading(true));
		try {
			const res = await fetch(
				"https://api.cloudinary.com/v1_1/kadoshi/image/upload",
				{
					method: "POST",
					body: data,
				}
			);
			const file = await res.json();
			if (figure === '+ add completed Work') {
				const data = await Axios.init().put(
					`https://kadoshiservices.herokuapp.com/api/professional/${userSlug}/works`,
					{ url: file.secure_url }
				);
				console.log(data);
			} else {
        		dispatch(updateProfessional({ profilePicture: file.secure_url }));
			}
			dispatch(successMessage('image uploaded!'))
			dispatch(loading(false));
		} catch (err) {
			dispatch(loading(false));
			dispatch(errorMessage("couldn't upload, try again."));
		}
	};

	const handleOpen = () => {
		setOpen(true)
	}

	return (
		<div>
			<Button onClick={handleOpen}>
				{figure}
			</Button>
			<DropzoneDialog
				open={open}
				onSave={(files) => handleSave(files)}
				acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
				showPreviews={true}
				maxFileSize={5000000}
				onClose={handleClose}
				filesLimit={1}
			/> 
		</div>
	);
}


export default DropzoneDialogExample;