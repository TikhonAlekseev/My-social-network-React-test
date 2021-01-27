import React from 'react'
import './Users.css'
import {connect} from "react-redux";
import {getUsers} from '../../Redux/users-reduce'
import User from './User'
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }
    usersList =() =>{
        return this.props.usersState.users.map(user => <User key={user.id} id = {user.id} name ={user.username} photo={user.userPhoto} />)
    }
    render() {

        return (
            <>
                <div className="main-window">
                    <div className="users-page">
                        {this.usersList()}
                    </div>
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        usersState : state.usersPage
    }

}
const mapDispatchToProps = (dispatch) =>{
    return{
        getUsers(){
            dispatch(getUsers())
        }
    }

}


export  default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)