import './App.css';
import { useData } from './Components/fetchData/useData';
import People from './Components/People/People';
import SearchBar from './Components/Searchbar/Search';

function App() {

  const data = useData();
  console.log(data)

  return ( <>
    <nav>
      <h3>Star Wars Encyclopedia</h3>
      <SearchBar />
    </nav>

    <People />
  </>   
  );
}

export default App;
