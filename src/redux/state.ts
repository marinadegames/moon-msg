let rerenderEntireTree = (state: RootStateType) => {
    console.log('state change!')
}

//types ==============================================================


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
let state:RootStateType = {
    profilePage: {
        notesData: [
            { id: 3, text: "Lor. Lorem Ipsum has best make a type specimen book.", likes: 356},
            { id: 2, text: "this is my first post", likes: 123 },
            { id: 1, text: 'Hi! How are you?', likes: 10},
        ],
        newNoteText: '',
    },
    dialogsPage: {
        messagesData: [
            { id: 1, text: 'Hi, how are you?' },
            { id: 2, text: "Hello, i'm fine, thanks" },
            { id: 3, text: "you ok?" },
            { id: 4, text: "Yes, i'm right" },
            { id: 5, text: "Good!" },
        ],
        dialogsData: [
            { id: 1, name: 'Eugene' },
            { id: 2, name: "Elina" },
            { id: 3, name: "Jack" },
            { id: 4, name: "Vlad" },
            { id: 5, name: "Mamka" },
        ],
    },
}

export const addNote = () => {
    let newNote = {
        id: 5,
        text: state.profilePage.newNoteText,
        likes: 0,
    }
    state.profilePage.notesData.unshift(newNote)
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText:string) => {
    state.profilePage.newNoteText = newText
    rerenderEntireTree(state);
}

export const subscribe = (observer:any) => {
    rerenderEntireTree = observer
}

export default state;