import {Link} from "react-router-dom"
export const  Menu=()=>{

    return(
        <section className="container text-white py-4">
        <nav className="d-flex gap-4">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/user">User</Link>
            <a target="_blank" className="nav-link" href="https://google.com">Google</a>
        </nav>
        </section>
    )
};