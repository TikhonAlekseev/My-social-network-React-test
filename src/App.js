import React from 'react'
import Header from "./Component/Header/Header"
import SiderBar from "./Component/SideBar/SideBar"
import ProfileContainer from "./Component/Profile/ProfileContainer"
import DialogsContainer from "./Component/Dialogs/DialogsContainer"
import {Route, BrowserRouter} from "react-router-dom"
import UsersContainer from "./Component/Users/UsersContainer";
import LoginPage from "./Component/AuthComponent/Auth";
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from "react-redux";
import {initialApp} from "./Redux/appReducer";
import "./app.css"
import Loader from "./Component/loader/loader";




firebase.initializeApp({
        apiKey: "AIzaSyD2OEu4pojRP1qcVEIXqX96_blGItqavc0",
        authDomain: "my-test-project-1-28894.firebaseapp.com",
        projectId: "my-test-project-1-28894",
        storageBucket: "my-test-project-1-28894.appspot.com",
        messagingSenderId: "827011378666",
        appId: "1:827011378666:web:36afb2e274154dc09bd693"
    }
)
export const storage = firebase.storage()

class App extends React.Component {
     componentDidMount() {
        firebase.auth().onAuthStateChanged((user)=>{
            this.props.initializeApp(user)
        })

    }

    render() {

        if(!this.props.initial){
            return (<Loader/>)
        }
        return(
            <BrowserRouter>
                <div>
                    <div className="my-container">
                        <Header/>
                        <SiderBar/>
                        <React.Fragment>
                            <Route path="/dialogs/:userId?" render={() => <DialogsContainer/>}/>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/login" render={() => <LoginPage/>}/>
                        </React.Fragment>
                    </div>
                </div>
            </BrowserRouter>
        )

    }




}
let mapStateToProps = (state) =>{
    return{
        initial : state.appReducer.initialApp,
        isAuth : state.authPage.isAuth,
    }
}
let mapDispatchToProps =  (dispatch) => {
    return{
        initializeApp(user){
            dispatch(initialApp(user))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
