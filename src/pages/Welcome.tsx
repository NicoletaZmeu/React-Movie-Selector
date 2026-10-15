import MovieCarousel from './MovieCarousel';

type StartQuestions = {
    setNext: () => void;
};

function Welcome ({setNext} : StartQuestions){
    return (
        <section>
            <div
                className="d-flex flex-column flex-lg-row align-items-center gap-4"
                style={{ padding: "40px", margin:"40px", marginTop:"120px", }}
            >
                <div style={{minWidth:"300px", minHeight:"200px"}}>
                    <h1 style={{fontSize: "clamp(4rem, 5vw, 5rem)",}}>Welcome back!</h1>
                    <h2 style={{fontSize:"clamp(4rem, 5vw, 3rem)"}}>Sit down and relax ...</h2>
                    <div style={{justifyContent:"center"}}>                        

                        <button type="button" onClick={setNext}
                            style={{
                                backgroundColor: "#f4c4d4",
                                borderRadius: "100px",
                                boxShadow: `inset 0 -12px 18px -10px rgba(128, 20, 55, 0.3), 0 4px 12px rgba(190, 45, 95, 0.25), 0 0 28px rgba(230, 80, 130, 0.3)`,                                    
                                color: "black",
                                width: "75%",
                                margin: "24px auto 0",
                                cursor: "pointer",
                                display: "inline-block",
                                padding: "10px 20px",
                                textAlign: "center",
                                transition: "all 250ms",
                                fontSize: "1.5rem",

                            }}
                            >Find a Movie</button>
                    </div>
                </div>
                <MovieCarousel/>
            </div>

        </section>
    )
};

export default Welcome;