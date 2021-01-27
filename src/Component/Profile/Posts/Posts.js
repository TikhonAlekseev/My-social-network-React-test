import React from 'react'
import Post from "./Post";
import AddNewTextRedux from "./ReduxForm";


const Posts =(props) => {
    const managePost = async(data) =>{
        if(data.newPost){
            await props.addPost(data.newPost)
        }else{
            await props.delPost(data)
        }
    }
    const newPosts = () => {
            if(props.posts.postsList.length === 0 ){
                return <div className='title-post-null'>Список постов пуст</div>
            }
            else{
                return props.posts.postsList.map(post => {
                    debugger
                    return <Post key ={post.id} id={post.id} text = {post.text} delPost={managePost} editMode={props.editMode}/>
                }

                )
            }
    }
    return(
        <div className = "profile-news">
            { props.editMode ?
                <div className ="profile-news-textarea">
                    <AddNewTextRedux onSubmit={managePost}/>
                </div>
               :null
            }
            <div className="profile-news__list-posts">
                {newPosts()}
            </div>
        </div>
    )
}
export default Posts