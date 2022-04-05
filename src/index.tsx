// Imports
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import {App} from "./App";
import './index.css';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import { store } from './redux/store';


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
            <App/>
            </HashRouter>
        </Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();