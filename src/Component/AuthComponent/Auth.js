import React from "react"
import './auth.css'
import {LoginFormRedux} from "./formsCustom";
import {connect} from "react-redux";
import {authUser, newUserRegistration} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";



class LoginPage extends React.Component{
    state = {
        select:false
    }

    authButtonFunc(){
        this.setState({
            select:false
        })
    }
    registrationButtonFunc(){
        this.setState({
            select:true
        })
    }
    userData(values){
        if(this.state.select){
            this.props.newUserRegist(values.login, values.password,values.name)
        }else{
            this.props.authUser(values.login, values.password)
        }
    }

    render() {
        if(this.props.isAuth){
            return <Redirect to={'/profile'}/>
        }else{
            return (
                <div className="main-window main-window--login">
                    <h1 className={'auth-title'}>Авторизация</h1>
                    <div className="auth-window">
                        <LoginFormRedux select={this.state.select} registration ={this.registrationButtonFunc.bind(this)} authOn={this.authButtonFunc.bind(this)} onSubmit={this.userData.bind(this)}/>
                    </div>
                </div>
            )
        }

    }


}

let mapDispatchToProps =(dispatch) =>{
    return{
        authUser(email,password){
            dispatch(authUser(email,password))
        },
        newUserRegist(email,password,name){
            dispatch(newUserRegistration(email,password,name))

        }

    }
}
let mapStateToProps = (state) =>{
    return{
        isAuth : state.authPage.isAuth
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)