
import {getUsersApi} from "../API/api";
const SET_USERS = 'SET_USERS'

let initialState = {
    users : []
}

const usersReducer =(state = initialState , action) =>{
    switch (action.type) {
        case SET_USERS :
            return {
                ...state,
                users:action.users
            }
        default : return state
    }
}

export default usersReducer

export const getUsers =() => async dispatch =>{
    let users = await getUsersApi().then(res=>([...res]))
    dispatch({type:SET_USERS ,users})
}