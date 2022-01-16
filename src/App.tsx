// imports
import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {LeftSideBar} from "./Components/LeftSideBar/LeftSideBar";
import {Main} from "./Components/Main/Main";
import {StoreType} from "./Redux/state";

//types
type AppPropsType = {
    store: StoreType
}
//assets

// components
function App({store, ...props}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={s.App}>

                <Header/>

                <div className={s.flexMain}>
                    <LeftSideBar/>
                    <Main posts={store._state.profilePage.posts}
                          dialogs={store._state.dialogsPage.dialogs}
                          addPost={store.addPost}/>
                </div>

                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;