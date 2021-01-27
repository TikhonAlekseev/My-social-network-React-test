import firebase from "firebase";
import {apiAuthUser, apiCreateUser, apiGetAuthData} from "../API/api";

const ADD_NEW_USER = "ADD_NEW_USER"
const USER_LOG_IN = "USER_LOG_IN"
const USER_SIGN_OUT = "USER_SIGN_OUT"

let initialState = {
    isAuth : false,
    userId : "",
    email  : "",
    name : ""
}

const authReducer = (state= initialState , action) =>{
    switch(action.type){
        case USER_LOG_IN :
            return{
                ...state,
                isAuth :true,
                email: action.email,
                userId:action.userId,
                name:action.name
            }
        case ADD_NEW_USER:
            return{
                ...state,
            isAuth :true,
            email: action.email,
            userId:action.userId,
                name: action.name
            }
        case USER_SIGN_OUT:
            return {
                ...state,
                isAuth :false,
                userId : "",
                email  : "",
                name : ""
            }
        default : return state
    }
}

export default authReducer


const userLogIn = (email,isAuth ,userId,name) =>{
    return {type:USER_LOG_IN , email,isAuth,userId,name}
}
const logOutUser =() =>{
    return {type:USER_SIGN_OUT }
}
const registnewUser =(email,isAuth,userId,name) =>{
    return {type:ADD_NEW_USER, email,isAuth,userId,name}
}



export const signOut =  () => async dispatch => {

    await firebase.auth().signOut()
    dispatch(logOutUser())
}

export const newUserRegistration = (email,password,name) =>{
    return async dispatch =>{
        let userId = await apiCreateUser(email,password,name)
        dispatch(registnewUser(email,true,userId,name))
    }
}

export const getAuthUserData = async (dispatch) =>{
    let {name,email,userId} = await apiGetAuthData()
    dispatch(userLogIn(email,true,userId,name))
}

export const authUser =(email,password) =>{
    return  async dispatch=>{
        try{
            await apiAuthUser(email,password)
            await getAuthUserData(dispatch)
        }
        catch (e) {
            alert("Вы не зарегистрированы ! Пройдите регистрацию")
        }
    }
}



