
function NavBar() {

    return <nav>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">New Releases</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Watched List</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">To Watch</a>
            </li>
            <li className="nav-item ">
                <a className="nav-link disabled" aria-disabled="true">User</a>
            </li>
</ul>
    </nav>;

}

export default NavBar;