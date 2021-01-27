import {
    apiDeletePost,
    apiAddPost,
    apiStatusUpdate,
    selectedUser,
    userId, apiGetPosts
} from "../API/api";

const ADD_POST = "ADD_POST"
const GET_PROFILE = "GET_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"

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
            debugger
            return {
                ...state,
                profile: action.dataUser.info,
                postsList:[...action.dataUser.userPosts],
                profileLoad:true,
                editMode:action.edit
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


