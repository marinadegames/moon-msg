// imports
import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {LeftSideBar} from "./Components/LeftSideBar/LeftSideBar";
import {Main} from "./Components/Main/Main";
import store from "./Redux/redux-store";
import { USER_ID_1 } from './Redux/profileReducer';



//types

//assets

// components
function App() {
    console.log(store.getState().allUsers, USER_ID_1)
    return (
        <BrowserRouter>
            <div className={s.App}>

                <Header/>

                <div className={s.flexMain}>
                    <LeftSideBar/>
                    <Main postsUser={store.getState().allUsers[USER_ID_1].posts}
                          allMessages={store.getState().allMessages}
                          dispatch={store.dispatch.bind(store)}/>
                </div>

                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;