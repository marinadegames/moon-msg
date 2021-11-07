import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Nav';
import Profile from './components/Profile';
import Footer from './components/Footer';

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
