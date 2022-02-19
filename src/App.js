import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import Movies from './Component/Movies';
import { movies } from './Component/getMovies';
import Favorites from './Component/Favorites';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route  path="/"   render={(props) => (
          <>
            <Banner {...props} />
            <Movies {...props} />

          </>
        )} /> */}
        <Route path='/' element={
          <>
            <Banner />
            <Movies />
          </>
        } />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {/* <Banner/>  */}
      {/* <Movies/> */}
      {/* <Favorites/> */}
    </Router>
  );
}

export default App;

