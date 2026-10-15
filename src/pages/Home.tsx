import {useState, useEffect} from 'react';
import Welcome from './Welcome.tsx';
import Recommend from "./Recommend.tsx";


function Home () {
    const [started, setStarted] = useState(false);
    
    return(
        <main>
            {started? (<Recommend/>) : <Welcome setNext={() => setStarted(true)}/>}
            
        </main>
    )
}

export default Home;