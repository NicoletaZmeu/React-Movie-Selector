import {Link} from 'react-router';

function NavBar() {

    return <nav>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link to='/new-release' className="nav-link active" aria-current="page">New Releases</Link>
            </li>
            <li className="nav-item">
                <Link to='/watched' className="nav-link active" aria-current="page">Watched List</Link>
            </li>
            <li className="nav-item">
                <Link to='/to-watch' className="nav-link active" aria-current="page">To Watch</Link>
            </li>
            <li className="nav-item ">
                <a className="nav-link disabled" aria-disabled="true">User</a>
            </li>
</ul>
    </nav>;

}

export default NavBar;