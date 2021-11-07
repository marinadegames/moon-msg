import './App.css';


const App = () => {
  return (
    <div className='appWrapper'>

      <header className='header'>
        <div><h1>Hi, samurai!</h1></div>
      </header>
      <div className='main'>
        <nav className='nav'>
          <a href='#'><div className='navLink'>Profile</div></a>
          <a href='#'><div className='navLink'>Message</div></a>
          <a href='#'><div className='navLink'>News</div></a>
          <a href='#'><div className='navLink'>Music</div></a>
          <div className='delimiter'></div>
          <a href='#'><div className='navLink'>Settings</div></a>
        </nav>

        <main className='content'>
          <div className='backImg'></div>
          <div className='mainProfile '>
            <div className="avatar "></div>
            <div className='profileData  '>
              <div className='nameUser'><h3>Eugene Pashkevich</h3></div>
              <div className='informUser'>
                <p><b>Date of birth:</b> 17.02.1997</p>
                <p><b>City:</b> Minsk </p>
                <p><b>Education:</b> GSMU '2019</p>
                <p><b>Web-site:</b> </p>
              </div>
            </div>

          </div>
          <div className='sendPost'>
            <div className='postsTitle'><h2>Send post:</h2><small>Max symbols: 200</small></div>
            <div className='sendPostDiv'>
              <textarea maxlength='200' className='textArea'></textarea>
              <div className='btnSend'>SEND</div>
            </div>
          </div>
          <div className='myPostDiv'>
            <div className='postsTitle'><h2>My posts:</h2></div>
            <div className='postDiv'>
              <div>
                <div><small><a href='#' className='userLink'>Eugene Pashkevich</a> | <a href='#' className='linkDate'>07.11.2021</a> | <a href='#' className='linkTime'>12:27</a></small></div>
                <div className='textMyPost'>I want to know JavaScript and React!</div>
              </div>
            </div>
            <div className='postDiv'>
              <div>
                <div><small><a href='#' className='userLink'>Eugene Pashkevich</a> | <a href='#' className='linkDate'>06.11.2021</a> | <a href='#' className='linkTime'>13:59</a></small></div>
                <div className='textMyPost'>Hello! My name is Eugene! I want to become a programmer!</div>
              </div>
            </div>
          </div>

        </main>

      </div>

      <footer className='footer'>
        Footer content
      </footer>

    </div>
  );
}




export default App;
