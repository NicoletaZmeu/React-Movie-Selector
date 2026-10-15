import {useState} from 'react';
import {createPortal} from 'react-dom';

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
            transition: "transform 0.4s ease",
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
                style={{borderRadius:"12px"}}
            />
            <p
                style ={{
                    fontSize: "1.25rem",
                    height: "2.8em",
                    margin: "8px auto",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                    overflowWrap: "anywhere",
                }}
            >{movie.title}</p>

           </button>

            {preview && createPortal(
                
                <div
                    style={{
                        position: "fixed",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                        inset: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        
                    }}
                >

                    <div
                        style={{
                            backgroundColor: "#222",
                            padding: "35px",
                            borderRadius:"15px",
                            overflow: "auto",
                            width: "900px",
                            maxWidth: "100%",
                            position: "relative"
                        }}
                    >
                        <div 
                        style={{
                            display:"grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "50px",
                            width: "100%",
                        }}>
                    
                            <div>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={`${movie.title} poster`}
                                    width={400}
                                    style={{borderRadius:"12px"}}

                                />
                            </div>
                            <div>
                                <h2>{movie.title}</h2>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        <button type="button" onClick={()=>setPreview(false)}
                            style={{
                                position:"absolute",
                                top: "12px",
                                right: "12px",
                                background: "transparent",
                                border: "none",
                                color: "white",
                                fontSize:"1.5rem",
                                fontFamily: "Arial",
                            }}
                            >
                            X
                        </button>
                    </div>


                </div>,
                document.body
            )}
        </article>
    );

}

export default MovieCard;