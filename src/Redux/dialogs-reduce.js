
let initialState = {
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

}


export let dialogsReducer = (state = initialState , action)=> {
    switch(action.type){
        case "ADD-NEW-MESSAGE" :
            let newMessage = {
                id : 5,
                message : action.newTextMessage
            }        
            return {
                ...state,
                messagesDialog:[...state.messagesDialog ,newMessage ],
                newTextMessage : ""
            }
        default:
            return state
        }
}

export function newMessageActionCreater(newTextMessage){return {type:"ADD-NEW-MESSAGE" , newTextMessage}}


