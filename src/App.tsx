import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Page from "./components/Page/Page"
import Footer from "./components/Footer/Footer";
import s from './App.module.css'

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Page />
            <Footer />
        </div>
    );
}

export default App;
