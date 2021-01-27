import {Redirect} from "react-router-dom";
import React from 'react'
import {connect} from "react-redux";

export const SecureClass = (Component) => {

    class RedirectClass extends React.Component{
        render(){

            if (this.props.isAuth === false) return <Redirect to="/login" />
                return <Component {...this.props}/>
        }
    }

    let mapStateToPropsSecure =(state)=>{

        return{
            isAuth : state.authPage.isAuth
        }
    }

    return connect(mapStateToPropsSecure)(RedirectClass)

}



