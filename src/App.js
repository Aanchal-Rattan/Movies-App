import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import Movies from './Component/Movies';
import { movies } from './Component/getMovies';

function App() {
  return (
    <>
    <Navbar/>,
    <Banner/>,
    <Movies/>
    </>
  );
}

export default App;
