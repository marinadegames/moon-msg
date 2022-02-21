// imports
import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import {LeftSideBar} from "./Components/LeftSideBar/LeftSideBar";
import {Main} from "./Components/Main/Main";
import {store} from "./Redux/store";
import HeaderContainer from './Components/Header/HeaderContainer';




//types


//assets


// components
function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <HeaderContainer />
                <div className={s.flexMain}>
                    <LeftSideBar/>
                    <Main allUsers={store.getState().allUsers}
                          allMessages={store.getState().allMessages}
                          dispatch={store.dispatch.bind(store)}/>
                </div>
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;