import {useState} from 'react';

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
    
    const [preview, setPreview] = useState(false);
    const [hover, setHover] = useState(false);


    return (
        <article
        style={{
            position:"relative",
            transform: hover ? "scale(1.1)" : "scale(1) ",
            transition: "transform 0.4 ease",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)} 
        className='movie-card'>
           
           <button type="button" onClick={()=>setPreview(true)}
            style={{
                display:"block",
                width: "100%",
                color: "inherit",
                background: "transparent",
                textAlign: "center",
                height : "100%",
                border: "0",   
            }}
            >
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} poster`}
                width={200}
            />
            <h2>{movie.title}</h2>

           </button>

            {preview && (
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <button type="button" onClick={()=>setPreview(false)}>
                        Close
                    </button>
                </div>
            )}
        </article>
    );

}

export default MovieCard;