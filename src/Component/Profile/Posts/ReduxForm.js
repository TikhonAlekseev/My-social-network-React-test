import React from 'react'
import {Field, reduxForm} from "redux-form";


const AddNewText=(props) =>{

    return(
        <form className="input-group" onSubmit={props.handleSubmit}>
            <Field component='textarea' name="newPost" type="text" className="form-control" placeholder="Что у вас нового ?"/>
            <button className="btn btn-outline-warning">Добавить новость</button>
        </form>

    )

}
const AddNewTextRedux = reduxForm({form:'newTextPost'})(AddNewText)


export default AddNewTextRedux
