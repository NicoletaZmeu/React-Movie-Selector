import { useEffect } from 'react';
import {useState} from 'react';
import {Link} from 'react-router';
import MovieCard from './MovieCard.tsx';


function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


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

        const endDate = new Date();
        const startDate = new Date(endDate) ;
        startDate.setDate(endDate.getDate() - 60);

        const filters = new URLSearchParams({
            watch_region: "IE",
            with_release_type: "4",
            "release_date.gte": formatDate(startDate),
            "release_date.lte": formatDate(endDate),
        });

        fetch(`https://api.themoviedb.org/3/discover/movie?${filters}`, options)
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