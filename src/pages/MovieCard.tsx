
type Movie = {
    id: number,
    title: string,
    poster_path: string | null,
}

type MovieCardProps = {
    movie: Movie,
}

function MovieCard({ movie } : MovieCardProps){
    return (
        <article className='movie-card'>
            <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                    width={200}
                />
            <h2>{movie.title}</h2>

        </article>
    );

}

export default MovieCard;