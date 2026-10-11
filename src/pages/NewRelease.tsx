import { useEffect } from 'react';
import {useState} from 'react';
import {Link} from 'react-router';


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

        {movies.map(movie => (
            <div key={movie.id}>
                {movie.poster_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                    width={200}
                />
        )}
    <p>{movie.title}</p>
  </div>
))}
    </main>
}
export default NewRelease;