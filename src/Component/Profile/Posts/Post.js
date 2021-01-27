import React from 'react'
import './post.css'
import postBack from '../../../img/cart.jpg'
const Post =(props) => {

    return(
        <div className="card" >
            <img src={postBack}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="card-data">
                        <h5 className="card-title">Новость</h5>
                        <p className="card-text">{props.text}</p>
                    </div>

                    <div className="card-buttons">
                        <button className= 'btn btn-outline-warning'>Смотреть</button>
                        {props.editMode
                            ? <button onClick={()=>props.delPost(props.id)} className= 'btn btn-outline-danger'>&times;</button>
                            : null
                        }
                    </div>

                </div>
        </div>
    )
}
export default Post