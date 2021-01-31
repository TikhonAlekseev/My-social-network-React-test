import React from 'react'
import {NavLink} from "react-router-dom";
import avatar from '../../img/avatar-default.jpg'


const User = (props) =>{
        return (
            <div  className="users-page-card">
                <div className="users-page-card__photo">
                    {props.userPhoto.photo == undefined
                    ? <img  src={avatar} className = "users__photo__img"/>
                    :<img  src={props.userPhoto.photo} className = "users__photo__img" />
                    }
                </div>
                <div className="users-page-card__username">
                    {props.name}
                </div>
                <NavLink to={`/profile/${props.id}`} className="users-page-card__button btn btn-outline-warning">
                    Открыть профиль
                </NavLink>
            </div>
        );

}
export default  User

