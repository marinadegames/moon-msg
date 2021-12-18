const ADD_NOTE = 'ADD_NOTE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
//types ==============================================================
type storeType = {
    _state: RootStateType,
    getState: Function,
    _rerenderEntireTree: Function,
    addNote: Function,
    updateNewPostText: Function,
    subscribe: Function,
    dispatch: Function,
}
type NotesDataType = {
    id: number,
    text: string,
    likes: number,
}
type MessagesDataType = {
    id: number,
    text: string,
}
type DialogsDataType = {
    id: number,
    name: string,
}
type ProfilePageType = {
    notesData: Array<NotesDataType>,
    newNoteText: string
}
type DialogsPageType = {
    messagesData: Array<MessagesDataType>,
    dialogsData: Array<DialogsDataType>,
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}

//DATA ==============================================================

let store: storeType = {
    _state: {
        profilePage: {
            notesData: [
                {id: 3, text: "Lor. Lorem Ipsum has best make a type specimen book.", likes: 356},
                {id: 2, text: "this is my first post", likes: 123},
                {id: 1, text: 'Hi! How are you?', likes: 10},
            ],
            newNoteText: '',
        },
        dialogsPage: {
            messagesData: [
                {id: 1, text: 'Hi, how are you?'},
                {id: 2, text: "Hello, i'm fine, thanks"},
                {id: 3, text: "you ok?"},
                {id: 4, text: "Yes, i'm right"},
                {id: 5, text: "Good!"},
            ],
            dialogsData: [
                {id: 1, name: 'Eugene'},
                {id: 2, name: "Elina"},
                {id: 3, name: "Jack"},
                {id: 4, name: "Vlad"},
                {id: 5, name: "Mamka"},
            ],
        },
    },
    _rerenderEntireTree(state: RootStateType) {
        console.log('state change!')
    },

    getState() {
        return this._state
    },
    addNote() {

    },
    updateNewPostText(newText: any) {


    },
    subscribe(observer: any) {
        this._rerenderEntireTree = observer
    },

    dispatch(action: any) {  // { type: 'ADD-NOTE' }
        if (action.type === ADD_NOTE) {
            let newNote = {
                id: 5,
                text: this._state.profilePage.newNoteText,
                likes: 0,
            }
            this._state.profilePage.notesData.unshift(newNote)
            this._rerenderEntireTree(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newNoteText = action.newText
            this._rerenderEntireTree(this._state);
        }else if (action.type === 'SUBSCRIBE') {

        }
    }
}

export const addNoteActionCreator = () => {
    return {
        type: ADD_NOTE
    }
}
export const updateNewPostTextActionCreator = (text:any) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default store;
