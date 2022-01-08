// imports
import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {LeftSideBar} from "./Components/LeftSideBar/LeftSideBar";
import {Main} from "./Components/Main/Main";
import {addPost, postsUser} from './Redux/tempStore'

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
                    <Main postsUser={postsUser}
                          addPost={addPost}/>
                </div>

                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;