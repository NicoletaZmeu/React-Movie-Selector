import {useState, useEffect} from 'react';

type Movie = {
    id: number;
    poster_path: string | null;
};

function MovieCarousel (){

    const [movies, setMovies] = useState<Movie[]>([]);
    //twilight 8966
    // me before you 296096
    // the notebook 11036
    // harry potter 671
    // the batman 414906

    useEffect(()=>{
        const movieId = [296096, 11036, 8966];


        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjQzNjg2OWJiMzkzYjViYWUyNTVhYWExNTY0NmIzOSIsIm5iZiI6MTc5MTQxNjMyNC4xMzQsInN1YiI6IjZhYzZkODA0MzdkNmNhZDMwYTAzZTI5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fC-YKQEgtzvLuOSO3QcaOsJVAFJqk4xB2q0TRv-c8lc'
            }
        };

        let cancel = false;
        movieId.forEach(id=> {
            fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
            .then(response => response.json())
            .then(movie=>{
                if(!cancel) {
                    setMovies(previous => previous.some(item => item.id === movie.id)? previous : [...previous, movie])
                };
            })
            .catch(error => console.error(error));
        })
    }, []);

    return (
    <section>
        <div
            style={{
                display:"flex",
                justifyContent:"center",
                flexWrap:"nowrap",
            }}
        >
            {movies.map((movie, index) => (
            <div 
                key={movie.id}
                style={{
                    position: "relative",
                    zIndex: index === 1 ? 2 : 1,
                    transform:
                        index === 1
                        ? "translateZ(50px) scale(1.1)"
                        : index === 0
                            ? "rotateY(20deg) scale(0.9)"
                            : "rotateY(-20deg) scale(0.9)",
                    margin: "0 -12px",
                    transition: "transform 0.4s ease",
                }}
                >
                    {movie.poster_path && (
                    <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    style={{
                        width: "400px",
                        borderRadius: "12px",
                        display: "block",
                        boxShadow: `
                            0 0 12px rgba(255, 40, 100, 0.9),
                            0 0 35px rgba(255, 40, 100, 0.7),
                            0 20px 35px rgba(0, 0, 0, 0.4)
                        `,
                    }}
                    />
                    )}
            </div>
            ))}
        </div>
    </section>
);

}

export default MovieCarousel;