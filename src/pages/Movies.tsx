
import {Link} from 'react-router';
import {useEffect, useState} from "react";

 fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=86436869bb393b5bae255aaa15646b39&page=1")
            .then(response => {
                if(!response.ok){
                    throw new Error('Could not retrieve');
                }
                return response.json()
            })

            .then(data => console.log(data.genres))
            .catch(error => console.error(error))


function Movies (){

    return <main>
        <h1>Movies to appear!</h1>
        <Link to="/" className="btn btn-primary">Go Back Home</Link>

    
    </main>

}

export default Movies;

