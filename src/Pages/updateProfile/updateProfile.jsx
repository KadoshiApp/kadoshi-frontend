import React from "react";
import { FooterThin, FooterWide } from "../../components/footer/footer";
import TopNav from "../../components/topNav/topNav";

import UpdateProfileInputs from '../../components/updateProfileInputs/updateProfileInputs'

import './updateProfile.scss';

const UpdateProfile = () => {
	return (
		<div className="update__profile">
			<div className='update__profile_caption'>
				<TopNav />
			</div>
			<div>
				<div> Update Profile </div>
                <div className="update__profile_body">
                    <div className='update__profile_img'> 
                        {/* <img src='https://res.cloudinary.com/kadoshi/image/upload/v1603717834/Register_2_No_Overlay_houozg.png' alt='' /> */}
                    </div>
                    <div className='update__img_caption'> Upload Profile Photo </div>
				    <UpdateProfileInputs />
                </div>
			</div>
			<FooterWide />
			<FooterThin />
		</div>
	);
};

export default UpdateProfile;
