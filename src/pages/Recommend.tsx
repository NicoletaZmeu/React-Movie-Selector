import {useState, useEffect} from 'react';
import MovieCard from "./MovieCard.tsx";
import "../Recommend.css";

type Movie = {
    id: number,
    title: string,
    overview: string,
    poster_path: string | null,
}

function Recommend () {

    const [step, setStep] = useState(1);
    const [mood, setMood] = useState("");
    const [duration, setDuration] = useState("");
    const [type, setType] = useState("");
    const [language, setLanguage] = useState("");
    const [style, setStyle] = useState("");
    const [adult, setAdult] = useState(false);


    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjQzNjg2OWJiMzkzYjViYWUyNTVhYWExNTY0NmIzOSIsIm5iZiI6MTc5MTQxNjMyNC4xMzQsInN1YiI6IjZhYzZkODA0MzdkNmNhZDMwYTAzZTI5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fC-YKQEgtzvLuOSO3QcaOsJVAFJqk4xB2q0TRv-c8lc'
        }
    };

    function recommend(pageNumber = 1) {

        if(loading) return;
        setLoading(true);
        
        // 1
        const filter = new URLSearchParams({
            include_adult: "false",
            language: "en",
            with_genres: mood,
            sort_by: "popularity.desc",
            page: String(pageNumber),
        });


        // 2
        if (duration === "short") {
            filter.set("with_runtime.lte", "90");
        }

        if (duration === "long"){
            filter.set("with_runtime.gte", "90");
        }

        if (language !== ""){
            filter.set("with_original_language", language);
        }

        if (type === "animation"){
            filter.set("with_genres", `${mood},16`)
        }

        if (type === "live-action"){
            filter.set("without_genres", "16");
        }

        if(style === "classic"){
            filter.set("primary_release_date.lte", "2004-12-31")
        }

        if(style === "modern"){
            filter.set("primary_release_date.gte", "2004-12-31")
        }

        if(adult === true){
            filter.set("include_adult", "true")
        }

         fetch(`https://api.themoviedb.org/3/discover/movie?${filter}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            setMovies( previous => pageNumber === 1 ? data.results : [...previous, ...data.results]);
            setPage(data.page);
            setTotalPages(data.total_pages);
            setTimeout(() => {
                setStep(8);
            }, pageNumber === 1 ? 1000 : 0);
        })

        .catch(error => console.error(error))
        .finally(()=> setLoading(false));
    }

    useEffect(() => {
        if (step === 7){
            recommend();
        }
    }, [step]);

    return <main>

    <div className={step < 8 ? "questions" : undefined} >
     
        { step === 1 && (
            <section>
                <h3 className="question-title">What kind of watch are you feeling?</h3>
                <div className="question-options">
                    <button className="answer-button" type='button' onClick={() => {setDuration('short'); setStep(2)}}>Quick Watch</button>
                    <button className="answer-button" type='button' onClick={() => {setDuration('long'); setStep(2)}}>Long Movies</button>
                    {/* <button type='button' onClick={() => {setDuration('cinema');  setStep(2)}}>Cinema Trip</button> */}
                </div>
            </section>
        )}

        {step === 2 && (

            <section>
                <h3 className="question-title">What are you in the mood for?</h3>
                <div className="question-options" >
                    <button className="answer-button" type='button' onClick={() => {setMood('35'); setStep(3)}}>Funny</button>
                    <button className="answer-button" type='button' onClick={() => {setMood('10749'); setStep(3)}}>Romantic</button>
                    <button className="answer-button" type='button' onClick={() => {setMood('12');setStep(3)}}>Adventurous</button>
                    <button className="answer-button" type='button' onClick={() => {setMood('99'); setStep(3)}}>Documentary</button>
                    <button className="answer-button" type='button' onClick={() => {setMood('18'); setStep(3)}}>Intense</button>
                    <button className="answer-button" type='button' onClick={() => {setMood('27'); setStep(3)}}>Scary</button>
                    <button className="answer-button" type='button' onClick={() => {setMood('878'); setStep(3)}}>Sci-Fi</button>
                    <button className="answer-button" type='button' onClick={()=> {setMood('10751'); setStep(3)}}>Family Friendly</button>
                </div>
 

            </section>
        )}

        {step === 3 && (
            <section>
                <h3 className="question-title">What type of movie you want?</h3>
           
                <div className="question-options">
                    <button className="answer-button" type='button' onClick={() => {setType('animation'); setStep(4)}}>Cartoons</button>
                    <button className="answer-button" type='button' onClick={() => {setType('live-action'); setStep(4)}}>Live Action</button>
                </div>

            </section>
        )}

        {step === 4 && (

            <section>
                <h3 className="question-title">Where in the world should we go?</h3>
           
                <div className="question-options" >
                    <button className="answer-button" type='button' onClick={() => {setLanguage('en'); setStep(5)}}>English Only</button>
                    <button className="answer-button" type='button' onClick={() => {setLanguage(''); setStep(5)}}>International Movies</button>
                </div>
            </section>
        )}

        {step === 5 && (

            <section>
                <h3 className="question-title">New or classics?</h3>
                <div className="question-options" >
                    <button className="answer-button" type='button' onClick={() => {setStyle('classic'); setStep(6)}}>Classics</button>
                    <button className="answer-button" type='button' onClick={() => {setStyle('modern'); setStep(6)}}>Modern Movies</button>
                </div>
            </section>
        )}

        {(step === 6 || step === 7) && (

            <section>
                <h3 className="question-title">Who is watching with you today?</h3>
                <div className="question-options" >
                    <button className="answer-button" type='button' onClick={() => {setAdult(true); setStep(7)}}>Alone</button>
                    <button className="answer-button" type='button' onClick={() => {setAdult(false); setStep(7)}}>With Family</button>
                    <button className="answer-button" type='button' onClick={() => {setAdult(false); setStep(7)}}>With Friends</button>
                    <button className="answer-button" type='button' onClick={() => {setAdult(true); setStep(7)}}>With Partner</button>
                </div>
            </section>

        )}

        {step === 7 && (
            <div className="loading-movies" role="status">
                <div className="spinner"/>
                <p>Finding your movies...</p>
            </div>
        )}
    </div>
        {step === 8 && (
             <div>

                    <p className="shadow-dance-text">🎬 Find the one that feels right to you. </p>

               <div 
                    style ={{
                        display: 'grid',
                        alignItems:"start",
                        justifyItems: 'center',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '3rem',
                        margin: '4rem',
                    }}
                >
                    {movies.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
               </div>
                {page < totalPages && (

                <div 
                    style={{display:"flex", justifyContent:"center"}}
                >
                    <button className="load-more"
                        type="button" 
                        disabled={loading}
                        onClick={() => recommend(page + 1)}
                        
                    >
                      Load more
                    </button>
                </div>
            )}

            </div>
        )}


    </main>;
}

export default Recommend;