import {connect} from "react-redux"
import React from 'react'
import Dialogs from "./Dialogs"
import {compose} from "redux";
import {SecureClass} from "../HOC/secureClass";
import {getUsersName,getDialog,addMessage} from "../../Redux/dialogs-reduce"
import { withRouter } from "react-router-dom";


class DialogsContainer extends React.Component {

    componentDidMount(){
        this.props.getAllUsersName()
    }
    componentDidUpdate(prevProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.getDialogUser()
        }
    }
    getDialogUser(){
        const userId = this.props.match.params.userId
        if(userId !== undefined){
            this.props.getDialog(userId)
        }
    }
    render(){
        return (
            <Dialogs {...this.props} idOtherUsersInDialog ={this.props.match.params.userId} />
        )
    }

}


const mapStateToProps = (state)=>{
    return {
        dialogsPage : state.dialogsPage,
        
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addMessage(value,idOtherUsersInDialog){
           dispatch(addMessage(value,idOtherUsersInDialog))
        },
        getAllUsersName(){
            dispatch(getUsersName())
        },
        getDialog(id){
            dispatch(getDialog(id))
        }
    }
}



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
     SecureClass
     )(DialogsContainer)
