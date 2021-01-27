
let store = {
    _state :{
        dialogsPage : {
            dialogsList : [
                { id : 1, name : "Саша" },
                { id : 2, name : "Петя" },
                { id : 3, name : "Ваня" },
                { id : 4, name : "Вова" },
                { id : 5, name : "Ира" }
            ],
            messagesDialog : [
                {id : 1 , message : "Привет ,как дела?"},
                {id : 2 , message : "Все хорошо,как сам?"},
                {id : 3 , message : "Отлично"}
            ],
            newTextMessage : ""
        },
        profilePage : {
            postsList:[
                {id:1 , text :"Сегодня был хороший день"},
                {id:2 , text :"Праздник прошел замечательно"},
                {id:3 , text :"Поступил в новый универ"},
                {id:4 , text :"Как жизнь друзья?"},
                {id:5 , text :"Круто что есть такая соц.сеть"}
            ],
            newTextPosts : " ",
        }
            
    },
    subscribe(observe){
        this.stateRender = observe
    },
    stateRender(){
        console.log("Add changes")
    },
    dispatch (action){
        
        }
    }

 




export default store





// window.state = store



