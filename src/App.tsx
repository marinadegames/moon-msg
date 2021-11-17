import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Page from "./components/Page/Page"
import Footer from "./components/Footer/Footer";
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>

                <Header/>
                <Page/>
                <Footer/>

            </div>
        </BrowserRouter>
    );
}

export default App;
