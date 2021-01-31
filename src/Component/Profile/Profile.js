import React from "react"
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo";


const Profile = (props) => {
    const editPhoto = (e) =>{
        const file = e.target.files[0]
        props.setPhoto(file)
    }
    return(
        <section className = "main-window">
            <ProfileInfo
                userPhoto={props.userPhoto.photo}
                editMode={props.editMode}
                editPhoto ={editPhoto}
                profile = {props.profile}
                updateStatus={props.updateStatus}
            />
            <Posts 
                addPost={props.addPosts}
                delPost ={props.delPost}
                posts={props.profilePage}
                editMode={props.profilePage.editMode}
            />
        </section>
        )
}

export default  Profile