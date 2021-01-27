
import firebase from "firebase";

//GET CURRENT USER ID
    export let userId = () =>{
   const user = firebase.auth().currentUser
    const userId = user.uid
    return userId
}

//STATUS UPDATE
    export let apiStatusUpdate = async (status) =>{
    await firebase.database().ref(`/users/${userId()}/info/status`).set({
        text:status
    })
}

// GET AND SEND USERS PHOTO
    export let apiSendPhoto = async (photo) =>{
        await firebase.database().ref(`users/${userId()}/info/userPhoto`).set({
            photo:photo
        })
    }

    export let apiGetPhoto = async () =>{
    let photoUrl =  (await firebase.database().ref(`/users/${userId()}/info/userPhoto/photo`).once('value')).val()
    return photoUrl
}

//SIGN IN
    export let apiAuthUser = async (email,password) =>{
    await firebase.auth().signInWithEmailAndPassword(email, password)
}

//GET AUTHORIZATION USERS DATA
    export let apiGetAuthData = async () => {
    let info = (await firebase.database().ref(`/users/${userId()}/info`).once('value')).val()

    return {
        name :info.username,
        email :info.email,
        userId:userId()
    }
}

//REGISTRATION NEW USER
    export let apiCreateUser = async (email,password,name) =>{
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    const newPerson = {
        info:{
            username:name,
            email,
            status:{text:'Добро пожаловать! Введите статус'},
            userPhoto:'',
            id:userId()
        },
        posts:[]
    }
    await firebase.database().ref(`/users/${userId()}/info`).set(newPerson)
    return userId()
}

//GET ALL USERS
    export  const getUsersApi = async () => {
   const users = (await firebase.database().ref(`/users`).once('value')).val()
    const usersArray = []
    for (let key in users){
        usersArray.push(users[key].info)
    }
    return usersArray
}

//GET SELECTED USERS  DATA
    export const selectedUser = async (id) =>{
    if(id === undefined)id = userId()
    const {info,posts} = (await firebase.database().ref(`/users/${id}`).once('value')).val()
    let userPosts = []
    for (let key in posts){
        userPosts.push({id : key , text: posts[key].text})
    }
    return {info ,userPosts}

}

//GET ALL POSTS
    export let apiGetPosts = async () =>{
    let textPosts = []
    let post = (await firebase.database().ref(`/users/${userId()}/posts`).once('value')).val()
    for (let key in post){
        textPosts.push({id:key , text:post[key].text})
    }
    return textPosts
}

//ADD POST
    export let apiAddPost = async (newPost) =>{
    await firebase.database().ref(`/users/${userId()}/posts`).push({text:newPost})
}

//DELETE POST
    export let apiDeletePost = async(id)=>{
    await firebase.database().ref(`/users/${userId()}/posts/${id}`).remove()
}

