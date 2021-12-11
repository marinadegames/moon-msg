// Imports
import reportWebVitals from './reportWebVitals';
import state, {addNote, RootStateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './index.css';
import {stat} from "fs";





export let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <
                App
                state={state}
                addNote={addNote}
                newNoteText={state.profilePage.newNoteText}
                updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();