import {connect} from "react-redux"
import Dialogs from "./Dialogs"
import {newMessageActionCreater} from "../../Redux/dialogs-reduce"
import {compose} from "redux";
import {SecureClass} from "../HOC/secureClass";

let mapStateToProps = (state)=>{
    return {
        dialogsPage : state.dialogsPage,
        
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        addMessage(value){
           dispatch(newMessageActionCreater(value))
        },
    }
}



export default compose(connect(mapStateToProps,mapDispatchToProps), SecureClass)(Dialogs)
