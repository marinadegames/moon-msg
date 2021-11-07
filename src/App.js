import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='appWrapper'>
      <Header /> 
      <div className='main'>
        <Navbar />
        <main className='content'>
          <Profile />
        </main>
      </div>

      <footer className='footer'>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
