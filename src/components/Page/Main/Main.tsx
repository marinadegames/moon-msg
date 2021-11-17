import React from "react";
import {Route} from "react-router-dom";
import s from './Main.module.css'

import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import News from "./News/News";

const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.divMain}>
                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </main>
    )
}

export default Main;