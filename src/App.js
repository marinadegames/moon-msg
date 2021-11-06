import './App.css';
import OpenAllMaps from './jsFiles/openAllMaps.js';
import Header from './components/Header.js'
import Technologies from './components/Technologies.js';
import MySolvesTasks from './components/MySolvedTasks.js';

const App = () => {
  return (
    
    <div className='allPage'>
      <Header />
      <Technologies />
      <MySolvesTasks />
      <OpenAllMaps />
    </div>
    
  );
}

export default App;
