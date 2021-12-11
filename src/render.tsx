import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNote, RootStateType} from "./redux/state";



export let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <
                App
                state={state}
                addNote={addNote}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}