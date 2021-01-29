import {connect} from "react-redux"
import Profile from "./Profile"
import React from 'react'
import "./profile.css"
import {addPost, delPost, getProfile,  updateStatus} from "../../Redux/profile-reduce"
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {SecureClass} from "../HOC/secureClass";
import Loader from "../loader/loader";



class ProfileContainer extends React.Component{
    componentDidMount() {
        this.getSelectedUser()
    }
    componentDidUpdate(prevProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.getSelectedUser()
        }
    }
    getSelectedUser = () =>{
        let userID = this.props.match.params.userId
        this.props.selectUser(userID)
    }

    render() {
        if(!this.props.profilePage.profileLoad){
            return (<Loader/>)
        }
        return (<Profile {...this.props} />)
    }
}

let mapStateToProps = (state)=>{
    return {
        profilePage : state.profilePage,
        profile : state.profilePage.profile,
        editMode : state.profilePage.editMode
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        addPosts(post){
            dispatch(addPost(post))
        },
        delPost(id){
            dispatch(delPost(id))
        },
        selectUser(id){
            dispatch(getProfile(id))
        },
        updateStatus(status){
            dispatch(updateStatus(status))
        },


    }
}


export default compose(connect(
    mapStateToProps,mapDispatchToProps),
    withRouter,
    SecureClass
)(ProfileContainer)