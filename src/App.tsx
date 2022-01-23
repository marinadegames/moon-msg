// imports
import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {LeftSideBar} from "./Components/LeftSideBar/LeftSideBar";
import {Main} from "./Components/Main/Main";
import store, {USER_ID_1} from "./Redux/store";


//types

//assets

// components
function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>

                <Header/>

                <div className={s.flexMain}>
                    <LeftSideBar/>
                    <Main postsUser={store._state.allUsers[USER_ID_1].posts}
                          allMessages={store._state.allMessages}
                          dispatch={store.dispatch.bind(store)}/>
                </div>

                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;