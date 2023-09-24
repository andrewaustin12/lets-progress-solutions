import './App.css';
import BottomButton from './Components/BottomButton';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar/>
      <BottomButton/>
    </div>
  );
}

export default App;
