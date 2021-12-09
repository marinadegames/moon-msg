import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addNote} from './redux/state'

export let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <
                App state={state}   addNote={addNote}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}