import React from "react"
import {ProfileStatus} from "./ProfileStatus";
import {apiGetPhoto,apiSendPhoto} from "../../API/api";
import avatar from '../../img/avatar-default.jpg'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo";



class Profile extends React.Component{
    state ={
        photo : avatar,
    }
    // componentDidMount() {
    //     apiGetPhoto().then(res => res !== null ? this.photoSetFunc(res):this.state.photo)
    // }
    // photoSetFunc(data){
    //     let typeArray = new Uint8Array(data)
    //     const photoURL = URL.createObjectURL(new Blob([typeArray.buffer],{type: 'image/jpeg'}))
    //     this.setState({photo : photoURL})
    // }
    // editPhoto = (e) =>{
    //    const file = e.target.files
    //     const reader = new FileReader()
    //     debugger
    //     reader.readAsArrayBuffer(file[0]);
    //     reader.onloadend = async ()=>{
    //         debugger
    //         const uint8Array = new Uint8Array(reader.result)
    //         await apiSendPhoto(uint8Array)
    //         this.setState({
    //             photo:apiGetPhoto().then(res=> this.photoSetFunc(res))
    //         })
    //     }
    // }

    render() {
        return(
                <section className="main-window">
                    <ProfileInfo
                        photo={this.state.photo}
                        editMode={this.props.editMode}
                        // editPhoto ={this.editPhoto}
                        profile = {this.props.profile}
                        updateStatus={this.props.updateStatus}
                    />
                    <Posts addPost={this.props.addPosts}
                           delPost ={this.props.delPost}
                           posts={this.props.profilePage}
                           editMode={this.props.profilePage.editMode}
                    />
                </section>
            )
    }



}

export default  Profile