import React from "react";
import Posts from "./Profile/Posts/Posts";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import s from './Main.module.css'
import {BrowserRouter, Route} from "react-router-dom";


const Main = () => {
    return (
        <BrowserRouter>
            <main className={s.main}>
                <div className={s.divMain}>

                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>

                    {/*<Profile/>*/}
                    {/*<Dialogs />*/}

                </div>
            </main>
        </BrowserRouter>
    )
}

export default Main;