import {Link} from 'react-router';

function NavBar() {

    return <nav 
        className="navbar navbar-expand-lg  bg-transparent px-2 justify-content-end sticky-top"
         style ={{
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
            marginBottom: "1rem",
         }}
        >
        
       
        <ul className="nav justify-content-end ">
            <li className="nav-item ">
                <Link to='/new-release' className="nav-link active text-white" aria-current="page">New Releases</Link>
            </li>
            <li className="nav-item">
                <Link to='/watched' className="nav-link active text-white" aria-current="page">Watched List</Link>
            </li>
            <li className="nav-item">
                <Link to='/to-watch' className="nav-link active text-white" aria-current="page">To Watch</Link>
            </li>
            <li className="nav-item ">
                <a className="nav-link disabled" aria-disabled="true">User</a>
            </li>
</ul>
    </nav>;

}

export default NavBar;