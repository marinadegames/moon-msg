import React from "react";
import {Route} from "react-router-dom";
import s from './Main.module.css'

import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import News from "./News/News";



const Main = (props:any) => {

    let DialogComponent = () => <Dialogs messagesData={props.messagesData}
                                         dialogsData={props.dialogsData}
                                         />
    let ProfileComponent = () => <Profile
                                    notesData={props.notesData}
                                    addNote={props.addNote}/>

    return (
        <main className={s.main}>
            <div className={s.divMain}>
                <Route  path='/profile' render={ ProfileComponent} />
                <Route path='/dialogs' render={ DialogComponent } />
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
            </div>
        </main>
    )
}

export default Main;