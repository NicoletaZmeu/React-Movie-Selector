import {Routes, Route} from "react-router";
import Home from './pages/Home.tsx';
import Movies from './pages/Movies.tsx';
import Navbar from './NavBar.tsx';
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
