// imports
import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";

//types

//assets

// components
function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;