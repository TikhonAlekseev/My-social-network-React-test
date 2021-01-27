import React from 'react'
import {ProfileStatus} from "./ProfileStatus";

const ProfileInfo = (props) =>{
    return (
        <div className="profile-data">
            <div className="profile-data-photo">
                <img  src={props.photo} className = "profile-data-photo__img"/>

                {props.editMode?
                    <div className="profile-data-photo__input input-wrap">
                        <input onChange={event =>props.editPhoto(event) } id='photo-edit' type="file" accept="image/*" className='profile_button_select'/>
                        <label className='button-label-photo' htmlFor="photo-edit">
                            <span className='btn my-btn btn-warning '>Выбирите изображение</span>
                        </label>
                    </div>
                    : null
                }

            </div>
            <div className="profile-data-information">
                <h1 className="profile-data-information__user-name">{props.profile.username}</h1>
                <ProfileStatus editMode={props.editMode} status={props.profile.status} updateStatus={props.updateStatus}  />
            </div>
        </div>
    )

}
export  default  ProfileInfo