import { Link } from "react-router-dom";

const nabenikStyle = {
    color: "orange",
}

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/*
                <a className="navbar-brand" href="#">Navbar</a>
                */}
                <div className="navbar-brand" style={nabenikStyle}>Nabenik</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/authors" className="nav-link">Authors</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/movies" className="nav-link">Movies</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;