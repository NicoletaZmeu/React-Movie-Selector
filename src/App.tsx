import {Routes, Route} from "react-router";
import Home from './components/Home.tsx';
import Movies from './components/Movies.tsx';
import Navbar from './components/NavBar.tsx';
import './App.css';

function App() {

  return(
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
