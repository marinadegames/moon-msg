import './App.css';

const App = () => {
  return (
    
    <div className='allPage'>
      <Header />
      <Technologies />
      <MySolvesTasks />
    </div>
    
  );
}

const Header = () =>{
  return(
    <div className='header'>
      <div><h1>HELLO, samurai! </h1></div>
      <div className='headerLinks'>
        <a >Home </a>
        <a>News </a>
        <a>Messages </a>
        <a>Feed </a>
      </div>
    </div>
  )
}

const Technologies = () =>{
  return(
    <div>
    <h2> Technologies: </h2>
      <div className="">
        <ul>
          <li><a>HTML</a></li>
          <li>CSS</li>
          <li>JS</li>
          <li>REACT</li>
          <li>REDUX</li>
        </ul>
      </div>
      </div>
  )
}

const MySolvesTasks = () => {
  return(
    <div>
      <h2> My solved tasks: </h2>
      <div className="App">
        <ul>
          <li><a>Counter Numbers</a></li>
          <li><a>HTML</a></li>
          <li><a>HTML</a></li>
          <li><a>HTML</a></li>
          <li><a>HTML</a></li>

        </ul>
      </div>
    </div>
  )
}

export default App;
