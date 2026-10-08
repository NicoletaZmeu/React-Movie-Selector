import {Routes, Route} from "react-router";
import Home from './pages/Home.tsx';
import NewRelease from './pages/NewRelease.tsx';
import ToWatch from './pages/ToWatch.tsx';
import Watched from './pages/Watched.tsx';
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
        <Route path='/new-release' element={<NewRelease />} />
        <Route path='/to-watch' element={<ToWatch />} />
        <Route path='/watched' element={<Watched />} />
      </Routes>
    </>
  );
}

export default App;
