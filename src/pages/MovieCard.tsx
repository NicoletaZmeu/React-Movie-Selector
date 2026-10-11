
type Movie = {
    id: number,
    title: string,
    overview: string,
    poster_path: string | null,
}

type MovieCardProps = {
    movie: Movie,
}

function MovieCard({ movie } : MovieCardProps){
    return (
        <article className='movie-card'>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </article>
    );

}

export default MovieCard