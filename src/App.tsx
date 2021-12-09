import React from 'react';
import './App.module.css';
import './App.module.css';
import Header from "./components/Header/Header";
import Page from "./components/Page/Page"
import Footer from "./components/Footer/Footer";
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";

function App(props:any) {
    return (
        <BrowserRouter>
            <div className={s.App}>

                <Header/>
                <Page
                    notesData={props.state.profilePage.notesData}
                    messagesData={props.state.dialogsPage.messagesData}
                    dialogsData={props.state.dialogsPage.dialogsData}
                    addNote={props.addNote}
                />
                <Footer/>

            </div>
        </BrowserRouter>
    );
}

export default App;