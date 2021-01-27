import React from "react"
import {NavLink} from "react-router-dom"
import DialogsForm from "./DialogsForm";
import './dialogs.css'

const Dialog = (props) =>{
    let path = "dialog/" + props.id;
    return(
            <NavLink className="dialogs-page-chat__item-link" to={path} >{props.name} </NavLink>
    )
}
const Message = (props) =>{
    return(
        <div className='dialogs-page-messages-item__text-content'>
            <span >{props.message}</span>
        </div>
    )
}


const Dialogs =(props) => {

    let  addMessage = (values) =>{
        props.addMessage(values.newText)
    }
    let messages = props.dialogsPage.messagesDialog.map(massage => <Message id={massage.id} message={massage.message}/>)
    let dialogs = props.dialogsPage.dialogsList.map(dialog => <Dialog id={dialog.id} name ={dialog.name}/>)
        return(
            <section className="main-window--dialogs">
                <div className = "dialogs-page">
                        <div className="dialogs-page-chat">
                            {dialogs}
                        </div>
                        <div className = "dialogs-page-messages">
                            <div className="dialogs-page-messages-item">
                                {messages}
                            </div>
                            <DialogsForm onSubmit={addMessage}/>
                        </div>
                </div>
            </section>
        )
}

export default  Dialogs