// Imports
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './index.css';
import {state} from "./Redux/state";


// type


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    )
    ;
}
rerenderEntireTree()