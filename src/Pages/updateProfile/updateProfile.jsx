import React from "react";
import { MdLinkedCamera } from "react-icons/md";

import { FooterThin, FooterWide } from "../../components/footer/footer";
import TopNav from "../../components/topNav/topNav";
import ButtonSmall from "../../components/buttonSmall/buttonSmall";

import UpdateProfileInputs from '../../components/updateProfileInputs/updateProfileInputs'

import './updateProfile.scss';

const UpdateProfile = () => {
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
                            <MdLinkedCamera color='#fff' />
                        </div>
                        <img src='https://thumbs.dreamstime.com/z/portrait-professional-construction-worker-hammer-tool-belt-white-background-150331239.jpg' alt='' />
                    </div>
                    <div className='update__img_caption'> Upload Profile Photo </div>
				    <UpdateProfileInputs />
                    <div className='update__upload_work'>
                        + add completed Work
                    </div>
                    <div className='update__profile_btn'>
                        <ButtonSmall caption='update' plain />
                    </div>
                </div>
			</div>
			<FooterWide />
			<FooterThin />
		</div>
	);
};

export default UpdateProfile;
