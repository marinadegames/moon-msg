// Imports
import ReactDOM from "react-dom";
import React from "react";
import {App} from "./App";
import './index.css';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import { store } from "./Redux/store";


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)

