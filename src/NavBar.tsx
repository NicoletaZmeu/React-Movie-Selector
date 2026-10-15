import {Link} from 'react-router';

function NavBar() {

    return <nav 
        className="navbar navbar-expand-lg bg-transparent px-3 px-lg-5 sticky-top"         
        style ={{
            backdropFilter: "blur(15px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            marginBottom: "1rem",
            fontSize: "24px",
            padding: "20px"
         }}
        >
        
        <a href="/" className='nav-link text-white' style={{fontSize:"34px"}}> 
        MoviePicker
        <span style={{ fontSize: "30px", marginRight: "8px" }}>
            🍿
        </span></a>

       
        <ul className="nav ms-auto">
          
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