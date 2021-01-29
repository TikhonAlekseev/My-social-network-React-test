import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import {dialogsReducer} from "./dialogs-reduce"
import {profileReducer} from "./profile-reduce"
import usersReducer from "./users-reduce"
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import authReducer from "./authReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    usersPage : usersReducer,
    form:formReducer,
    authPage:authReducer,
    appReducer:appReducer
})


let store = createStore(
        reducers,
        compose(
            applyMiddleware(thunkMiddleWare),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

)

window.store = store


export default store