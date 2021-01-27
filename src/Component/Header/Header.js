import React from 'react'
import "./header.css"
import {connect} from "react-redux";
import {signOut} from "../../Redux/authReducer";
import {NavLink} from "react-router-dom";
import logo from '../../img/logo-2.png'

const Header =(props) =>{
    let signOutFunc = async () =>{
        await props.signOutUser()
    }
        return(
            <header className = "header">
                <a href="#">
                    <img src={logo} className = "header__img"/>
                </a>
                <div className="header-account">
                    <div className="header-account__name">{props.isAuth? props.name:"Account name"}</div>
                    <div className="header-account__button-exit">
                        {props.isAuth ?
                            <button onClick={signOutFunc} className="btn btn-outline-light">
                                Выйти</button>
                            : <NavLink to={'/login'}>Войти</NavLink> }
                    </div>
                </div>
            </header>
        )
}
let mapStateToProps =(state) =>{
    return{
        isAuth:state.authPage.isAuth,
        name:state.authPage.name
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        signOutUser(){dispatch(signOut())}
    }
}



export default  connect(mapStateToProps,mapDispatchToProps)(Header)
