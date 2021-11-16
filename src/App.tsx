import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Page from "./components/Page/Page"
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Page />
            <Footer />
        </div>
    );
}

export default App;
