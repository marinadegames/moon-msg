// imports
import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {LeftSideBar} from "./Components/LeftSideBar/LeftSideBar";
import {Main} from "./Components/Main/Main";
import {addPost, StateType} from "./Redux/state";

//types
type AppPropsType = {
    state: StateType

}
//assets

// components
function App({state, ...props}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={s.App}>

                <Header/>

                <div className={s.flexMain}>
                    <LeftSideBar/>
                    <Main posts={state.profilePage.posts}
                          dialogs={state.dialogsPage.dialogs}
                          addPost={addPost}/>
                </div>

                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;