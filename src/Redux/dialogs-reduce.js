import { getUsersApi,userId,apiSetDialog,apiGetDialog } from "../API/api"
const GET_USERS = "GET_USERS"
const ADD_MESSAGE = "ADD_MESSAGE"
const GET_DIALOG = "GET_DIALOG"

let initialState = {
    users : [],
    chat:{
        message:[]
    }
        
    
        
        
    ,
}

export let dialogsReducer = (state = initialState , action)=> {
    switch(action.type){
        case GET_DIALOG :       
        return {
            ...state,
            chat : {...state.chat,
            message:[ ...action.dialog]
            }
        }
        case ADD_MESSAGE :       
            return {
                ...state,
               chat : {...state.chat,
                message:[...state.chat.message , action.newMessage]
                }
            }
        case GET_USERS :       
            return {
                ...state,
               users : action.allUsers
            }
        default:
            return state
        }
}



export const getUsersName = () => async dispacth => { 
   const allUsers =  await getUsersApi()
     dispacth({type:GET_USERS , allUsers })
}

export const addMessage = (message,idOtherUser) => async dispatch =>{
    const currentUserId = await userId()
    const newMessage = {idUser:currentUserId , text:message}
    apiSetDialog(currentUserId, idOtherUser, newMessage)
    dispatch({type:ADD_MESSAGE , newMessage})

}


export const getDialog = (idOtherUser) => async dispatch => {
    
    const currentUserId = await userId()
    const dialog = await apiGetDialog(currentUserId,idOtherUser)
    dispatch({type: GET_DIALOG ,dialog })
} 

