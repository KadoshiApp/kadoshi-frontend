import React, { useState } from "react";
import { MdLinkedCamera } from "react-icons/md";
import Upload from '../../components/uploadModal/uploadModal';
import { errorMessage } from "../../redux/message/message.action";
import { useDispatch, useSelector } from "react-redux";

import { FooterThin, FooterWide } from "../../components/footer/footer";
import TopNav from "../../components/topNav/topNav";
import ButtonSmall from "../../components/buttonSmall/buttonSmall";

import UpdateProfileInputs from '../../components/updateProfileInputs/updateProfileInputs'
import './updateProfile.scss';

const UpdateProfile = () => {
    const professionalData = useSelector((state) => state.loginReducer.profData);
    const profData = useSelector((state) => state.professionalReducer);
    const initialState = {
        full_name: professionalData.fullName,
		category: professionalData.profession,
		experience: professionalData.experience,
		location: '',
		comment: '',
	};
    const dispatch = useDispatch();
    console.log(professionalData, 'Professional Data');
    console.log(profData, "Prof Data");
    const [ inputData, setInputData ] = useState(initialState)
    const [ profilePic, setProfilePic ] = useState('')
    const [ completedWork, setCompletedWork ] = useState('');
    const { full_name, comment, experience, category, location } = inputData

    const handleInputs = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
	};
	
	const handleSubmit = (e) => {
        console.log(profilePic, completedWork)
        if (!full_name || !location || !comment || !category || !experience ) {
            return dispatch(errorMessage('Complete all Fields!'))
        } else if (full_name.split(' ').length < 2) {
            return dispatch(errorMessage('please enter full name.'))
        }
    }
    const uploadCaption = '+ add completed Work';
    const uploadIcon = <MdLinkedCamera color="#fff" size="30px" />;

	return (
		<div className="update__profile">
			<div className='update__profile_caption'>
				<TopNav />
                <div className='update__profile_brand'>
                    <div>Update<span>Profile</span></div>
                    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam totam autem ipsa odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet. </div>
                </div>
			</div>
			<div>
				<div className='update__profile_head'> Update Profile </div>
                <div className='update__profile_body'>
                    <div className='update__profile_img'>
                        <div className='update__profile_overlay'>
                            <Upload figure={uploadIcon} setUploadUrl={setProfilePic} />
                        </div>
                        <img src='https://thumbs.dreamstime.com/z/portrait-professional-construction-worker-hammer-tool-belt-white-background-150331239.jpg' alt='' />
                    </div>
                    <div className='update__img_caption'> Upload Profile Photo </div>
				    <UpdateProfileInputs handleInputs={handleInputs} inputData={inputData} />
                    <div className='update__upload_work'>
                        <Upload figure={uploadCaption} setWorkUrl={setCompletedWork} />
                    </div>
                    <div className='update__profile_btn'>
                        <ButtonSmall caption='update' plain clicked={handleSubmit} />
                    </div>
                </div>
			</div>
			<FooterWide />
			<FooterThin />
		</div>
	);
};

export default UpdateProfile;
