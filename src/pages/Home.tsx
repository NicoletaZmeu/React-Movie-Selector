import {useState, useEffect} from 'react';
import MovieCard from "./MovieCard.tsx";

type Movie = {
    id: number,
    title: string,
    poster_path: string | null,
}

function Home () {

    const [step, setStep] = useState(0);
    const [mood, setMood] = useState("");
    const [duration, setDuration] = useState("");
    const [type, setType] = useState("");
    const [language, setLanguage] = useState("");
    const [style, setStyle] = useState("");
    const [adult, setAdult] = useState(false);


    const [movies, setMovies] = useState<Movie[]>([]);

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjQzNjg2OWJiMzkzYjViYWUyNTVhYWExNTY0NmIzOSIsIm5iZiI6MTc5MTQxNjMyNC4xMzQsInN1YiI6IjZhYzZkODA0MzdkNmNhZDMwYTAzZTI5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fC-YKQEgtzvLuOSO3QcaOsJVAFJqk4xB2q0TRv-c8lc'
        }
    };

    function recommend() {
        
        // 1
        const filter = new URLSearchParams({
            include_adult: "false",
            language: "en",
            with_genres: mood,
            sort_by: "popularity.desc",
        });


        // 2
        if (duration === "short") {
            filter.set("with_runtime.lte", "90");
        }

        if (duration === "long"){
            filter.set("with_runtime.gte", "90");
        }

        if (language === ""){
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
            setMovies(data.results);
        })
        .catch(error => console.error(error));
    }

    

    return <main>
        <h1>Welcome back!</h1>
        <h2>Sit down and relax ...</h2>

        {step === 0 && (
            <button onClick={()=> setStep(1)}>Find a Movie</button>
        )}

        { step === 1 && (
            <section>
                <h3>What kind of watch are you feeling?</h3>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <button type='button' onClick={() => {setDuration('short'); setStep(2)}}>Quick Watch</button>
                    <button type='button' onClick={() => {setDuration('long'); setStep(2)}}>Long Movies</button>
                    {/* <button type='button' onClick={() => {setDuration('cinema');  setStep(2)}}>Cinema Trip</button> */}
                </div>
            </section>
        )}

        {step === 2 && (

            <section>
                <h3>What are you in the mood for?</h3>
                <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
                    <button type='button' onClick={() => {setMood('35'); setStep(3)}}>Funny</button>
                    <button type='button' onClick={() => {setMood('10749'); setStep(3)}}>Romantic</button>
                    <button type='button' onClick={() => {setMood('12');setStep(3)}}>Adventurous</button>
                    <button type='button' onClick={() => {setMood('99'); setStep(3)}}>Documentary</button>
                    <button type='button' onClick={() => {setMood('18'); setStep(3)}}>Intense</button>
                    <button type='button' onClick={() => {setMood('27'); setStep(3)}}>Scary</button>
                    <button type='button' onClick={() => {setMood('878'); setStep(3)}}>Sci-Fi</button>
                    <button type='button' onClick={()=> {setMood('10751'); setStep(3)}}>Family Friendly</button>
                </div>
 

            </section>
        )}

        {step === 3 && (
            <section>
                <h3>What type of movie you want?</h3>
           
                <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
                    <button type='button' onClick={() => {setType('animation'); setStep(4)}}>Cartoons</button>
                    <button type='button' onClick={() => {setType('live-action'); setStep(4)}}>Live Action</button>
                </div>

            </section>
        )}

        {step === 4 && (

            <section>
                <h3>Where in the world should we go?</h3>
           
                <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
                    <button type='button' onClick={() => {setLanguage('en'); setStep(5)}}>English Only</button>
                    <button type='button' onClick={() => {setLanguage(''); setStep(5)}}>International Movies</button>
                </div>
            </section>
        )}

        {step === 5 && (

            <section>
                <h3>New or classics?</h3>
                <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
                    <button type='button' onClick={() => {setStyle('classic'); setStep(6)}}>Classics</button>
                    <button type='button' onClick={() => {setStyle('modern'); setStep(6)}}>Modern Movies</button>
                </div>
            </section>
        )}

        {step === 6 && (

            <section>
                <h3>Who is watching with you today?</h3>
                <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
                    <button type='button' onClick={() => {setAdult(true); setStep(7)}}>Alone</button>
                    <button type='button' onClick={() => {setAdult(false); setStep(7)}}>With Family</button>
                    <button type='button' onClick={() => {setAdult(false); setStep(7)}}>With Friends</button>
                    <button type='button' onClick={() => {setAdult(true); setStep(7)}}>With Partner</button>
                </div>
            </section>

        )}

        {step === 7 && (
            <button onClick={() =>{recommend(), setStep(8)}}>Recommend movies</button>
        )}

        {step === 8 && (
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
        )}
    </main>;
}

export default Home;