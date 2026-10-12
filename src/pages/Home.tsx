import {useState} from 'react';


function Home () {

    const [showQuestions, setShowQuestions] = useState(false);
    const [mood, setMood] = useState("");
    const [duration, setDuration] = useState("");
    const [type, setType] = useState("");
    const [language, setLanguage] = useState("");
    const [style, setStyle] = useState("");
    const [person, setPerson] = useState("");

    return <main>
        <h1>Welcome back!</h1>
        <h2>Sit down and relax ...</h2>
        <button onClick={()=> setShowQuestions(true)}>Find a Movie</button>

        { showQuestions && (

        <section>
            <h3>What kind of watch are you feeling?</h3>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button type='button' onClick={() => setDuration('short')}>Quick Watch</button>
            <button type='button' onClick={() => setDuration('long')}>Long Movies</button>
            <button type='button' onClick={() => setDuration('cinema')}>Cinema Trip</button>
            </div>


            <h3>What are you in the mood for?</h3>
            <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
            <button type='button' onClick={() => setMood('Comedy')}>Funny</button>
            <button type='button' onClick={() => setMood('Romance')}>Romantic</button>
            <button type='button' onClick={() => setMood('Action')}>Adventurous</button>
            <button type='button' onClick={() => setMood('Documentary')}>Documentary</button>
            <button type='button' onClick={() => setMood('Drama')}>Intense</button>
            <button type='button' onClick={() => setMood('Horror')}>Scary</button>
            <button type='button' onClick={() => setMood('Drama')}>Intense</button>
            <button type='button' onClick={() => setMood('Science Fiction')}>Sci-Fi</button>
            <button type='button' onClick={()=> setMood('Family')}>Family Friendly</button>
            </div>
 
            <h3>What type of movie you want?</h3>
           
            <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
                <button type='button' onClick={() => setType('Animation')}>Cartoons</button>
                <button type='button' onClick={() => setType('Live')}>Live Action</button>
                <button type='button' onClick={() => setType('both')}>No preference</button>

            </div>

            <h3>Where in the world should we go?</h3>
           
            <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
                <button type='button' onClick={() => setLanguage('English')}>English Only</button>
                <button type='button' onClick={() => setLanguage('International')}>International Movies</button>
            </div>

            <h3>New or classics?</h3>
            <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
                <button type='button' onClick={() => setStyle('Classic')}>Classics</button>
                <button type='button' onClick={() => setStyle('Modern')}>Modern Movies</button>
            </div>
            
        </section>
        )}
    </main>;
}

export default Home;