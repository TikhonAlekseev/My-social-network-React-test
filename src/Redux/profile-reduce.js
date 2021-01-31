import {
    apiDeletePost,
    apiAddPost,
    apiStatusUpdate,
    selectedUser,
    userId, apiGetPosts,
    editPhoto
} from "../API/api";
// import avatarDefault from '../../img/avatar-default.jpg'

const ADD_POST = "ADD_POST"
const GET_PROFILE = "GET_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SET_USER_PHOTO  = "SET_USER_PHOTO "

let initialState = {
        postsList:[],
        profile: {},
        profileLoad : false,
        editMode:false
}
export let profileReducer = (state = initialState , action) =>{
    switch(action.type){


        case ADD_POST:
            return {
                ...state,
                postsList: action.posts
            }
        case DELETE_POST:
            return {
                ...state,
                postsList: action.posts
            }
        case GET_PROFILE:
            return {
                ...state,
                profile: action.dataUser.info,
                postsList:[...action.dataUser.userPosts],
                profileLoad:true,
                editMode:action.edit
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                profile:{...state.profile,
                    userPhoto:{
                        photo:action.img
                    }
                }
            }
        case SET_STATUS:
            return {
                ...state,
                profile:{...state.profile,
                    status:{...state.profile.status ,
                        text:action.status
                    }
                }
            }
        default : return state
    }
}


export const addPost = (post) => async dispatch =>{
        await apiAddPost(post)
        const posts = await apiGetPosts()
        dispatch({type:ADD_POST ,posts })
}
export const delPost = (id) => async dispatch =>{
        await apiDeletePost(id)
        const posts = await apiGetPosts()
        dispatch({type:DELETE_POST ,posts })
}
export const getProfile = (id) =>async dispatch => {
    const dataUser = await selectedUser(id).then(res => ({...res}))
    const currentUser = await userId()
    let edit = false
     if(dataUser.info.id === currentUser){
         edit = true
     }

    dispatch({type:GET_PROFILE , dataUser , edit})
}
export const updateStatus = (status) => async dispatch =>{
    await apiStatusUpdate(status)
    dispatch({type:SET_STATUS ,status })
}



export const setPhoto = (file) => async dispatch =>{
    const img = await editPhoto(file)
    debugger
    dispatch({type:SET_USER_PHOTO , img})
}

