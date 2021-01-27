import {getAuthUserData} from "./authReducer";

const INITIAL_APP = "INITIAL_APP"

let initialState = {
    initialApp:false
}
 const appReducer = (state = initialState , action) =>{
    switch (action.type) {
        case INITIAL_APP :
            return {
                ...state,
                initialApp: true
            }
        default:return state
    }
}

export default appReducer



export const initialApp = (user)=> async dispatch=> {
    dispatch({type:INITIAL_APP})

    if(user){
        await getAuthUserData(dispatch)
    }
}

