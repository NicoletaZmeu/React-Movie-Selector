import { useEffect } from 'react';
import {useState} from 'react';
import {Link} from 'react-router';
import MovieCard from './MovieCard.tsx';


type Movie = {
    id: number,
    title: string,
    poster_path: string | null,
}

function NewRelease () {

    const [movies, setMovies] = useState<Movie[]>([]);

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjQzNjg2OWJiMzkzYjViYWUyNTVhYWExNTY0NmIzOSIsIm5iZiI6MTc5MTQxNjMyNC4xMzQsInN1YiI6IjZhYzZkODA0MzdkNmNhZDMwYTAzZTI5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fC-YKQEgtzvLuOSO3QcaOsJVAFJqk4xB2q0TRv-c8lc'
        }
    };

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/popular?page=1`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            setMovies(data.results);
        })
        .catch(error => console.error(error));
    },[]);
    

    return <main>
        <h1>New Releases!</h1>
        <Link to='/' className='btn btn-primary'>Back Home</Link>

            <div 
                style ={{
                    display: 'grid',
                    justifyItems: 'center',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    margin: '4rem',
                }}
            >
                {movies.map(movie => ( <MovieCard movie = {movie}/>))}
            </div>
       
    </main>;
}
export default NewRelease;