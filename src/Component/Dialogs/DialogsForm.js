import React from 'react'
import {Field, reduxForm} from "redux-form";

let DialogsForm = (props) =>{
    return(
        <form className="input-group" onSubmit={props.handleSubmit}>
            <div className="input-group">
                <Field component={'textarea'} name={'newText'} className="form-control"  placeholder="Введите сообщения"></Field>
                <button className="btn btn-light">Отправить сообщение</button>
            </div>
        </form>
    )


}


export default  reduxForm({form:'message'})(DialogsForm)
