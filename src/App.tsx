// imports
import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Page from "./components/Page/Page"
import Footer from "./components/Footer/Footer";
import s from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import {DialogsDataType, NotesDataType, ProfilePageType, RootStateType, storeType} from "./redux/state";

// types

type propsTypeApp = {
    store: storeType,
    state: RootStateType,
    profilePage: ProfilePageType,
    dialogsPage: DialogsDataType,
    notesData: NotesDataType,
    newNoteText: string,
    updateNewPostText: any
    subscribe: Function,
    dispatch: Function,
}

// components
function App(props: any) {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header/>
                <Page
                    notesData={props.state.profilePage.notesData}
                    messagesData={props.state.dialogsPage.messagesData}
                    dialogsData={props.state.dialogsPage.dialogsData}
                    dispatch={props.dispatch}
                    store={props.store}
                />
                <Footer/>

            </div>
        </BrowserRouter>
    );
}

export default App;