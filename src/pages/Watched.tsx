import {Link} from 'react-router';

function Watched (){
    return <main>
        <h1>Watched Movies!</h1>
        <Link to='/' className='btn btn-primary'>Back Home</Link>
    </main>
}

export default Watched;