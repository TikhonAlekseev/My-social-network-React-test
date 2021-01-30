

import {NavLink} from "react-router-dom"
import DialogsForm from "./DialogsForm";
import './dialogs.css'




const Dialog = (props) =>{

    return(
        <NavLink  to={`/dialogs/${props.id}`} id={props.id} className="dialogs-page-chat__item-link" >{props.name} </NavLink>
    )
}

const Message = (props) =>{
    return(
        <div id = {props.userId} className='dialogs-page-messages-item__text-content'>
            <span >{props.text}</span>
        </div>
    )
}


const Dialogs =(props) => {

    let addMessage = (values) =>{
        props.addMessage(values.newText , props.idOtherUsersInDialog)
    }

    let messages = props.dialogsPage.chat.message.map(item => <Message userId={item.idUser} text={item.text}/>)

    let dialogs = props.dialogsPage.users.map(dialog => <Dialog key={dialog.id} macth={props.macth} id={dialog.id} name ={dialog.username}/>)

        return(
            <section className="main-window--dialogs">
                <div className = "dialogs-page">
                        <div className="dialogs-page-chat">
                            {dialogs}
                        </div>
                        {props.idOtherUsersInDialog === undefined

                        ? <div>
                            <h2>Страница диалогов</h2>
                            <h3>Здесь вы можете общаться с разными людьми</h3>
                        </div> 

                        :<div className = "dialogs-page-messages">
                            <div className="dialogs-page-messages-item">
                                {messages}
                            </div>
                            <DialogsForm onSubmit={addMessage}/>
                        </div>
}
                    
                        
                </div>
            </section>
        )
}

export default  Dialogs