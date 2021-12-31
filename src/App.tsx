// imports
import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";

// components
function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>

            </div>
        </BrowserRouter>
    );
}

export default App;