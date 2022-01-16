// Imports
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './index.css';
import {store} from "./Redux/state";


// type
export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    )
}
rerenderEntireTree()