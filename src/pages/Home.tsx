import { Link } from "react-router/internal/react-server-client";

function Home () {
    return <main>
        <h1>Welcome back!</h1>
        <h2>Sit down and relax ...</h2>
        <div className="d-grid gap-2 col-6 mx-auto">
        <Link className="btn btn-primary" to="/movies">Find A Movie</Link>
        </div>
    </main>;
}

export default Home;