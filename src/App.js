import './App.css';
import { useData } from './Components/fetchData/useData';
import LeftBar from './Components/LeftBar/Left';
import Data from './Components/DisplayData/data';
import SearchBar from './Components/Searchbar/Search';

function App() {

  const data = useData();
  console.log(data)

  return ( <>
  <div className='main'>
    <nav>
      <h3>Star Wars Encyclopedia</h3>
      <SearchBar />
    </nav>

    <div>
      <LeftBar />
      <Data />
    </div>
  </div>  
  </>   
  );
}

export default App;
