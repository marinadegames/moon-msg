import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = () => {
  return (

    <div className='appWrapper'>
      <Header name='Eugene' age='25' />
      <div className='main'>
        <Navbar />
        <main className='content'>

          <div className='appWrapperContent'>

            <BrowserRouter>
              <Routes>

                <Route path="/profile" element={<Profile />} />
                <Route path="/dialogs" element={<Dialogs />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />

              </Routes>
            </BrowserRouter>

          </div>

        </main>
      </div>

      <footer className='footer'>
        <Footer />
      </footer>

    </div>

  );
}

export default App;
