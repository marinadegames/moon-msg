// imports
import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import {LeftSideBar} from "./Components/LeftSideBar/LeftSideBar";
import {Main} from "./Components/Main/Main";
import HeaderContainer from './Components/Header/HeaderContainer';


// components
function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <HeaderContainer />
                <div className={s.flexMain}>
                    <LeftSideBar/>
                    <Main/>
                </div>
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;