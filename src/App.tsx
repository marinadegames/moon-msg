// imports
import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {LeftSideBar} from "./Components/LeftSideBar/LeftSideBar";
import {Main} from "./Components/Main/Main";
import store from "./Redux/redux-store";



//types

//assets

// components
function App() {



    return (
        <BrowserRouter>
            <div className={s.App}>

                <Header allUsers={store.getState().allUsers}/>

                <div className={s.flexMain}>
                    <LeftSideBar/>
                    <Main postsUser={store.getState().allUsers[0].posts}
                          allUsers={store.getState().allUsers}
                          allMessages={store.getState().allMessages}
                          dispatch={store.dispatch.bind(store)}/>
                </div>

                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;