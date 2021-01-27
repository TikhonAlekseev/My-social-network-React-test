import React from 'react'
import {NavLink} from "react-router-dom";


const User = (props) =>{
        return (
            <>
                <div  className="users-page-card">
                    <div className="users-page-card__photo">
                        <img src={props.photo} alt="Фотография"/>
                    </div>
                    <div className="users-page-card__username">
                        {props.name}
                    </div>
                    <NavLink to={`/profile/${props.id}`} className="users-page-card__button btn btn-outline-warning">
                        Открыть профиль
                    </NavLink>
                </div>
            </>
        );

}
export default  User

