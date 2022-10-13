import { Link } from "react-router-dom";

export default function Header (title) {
    return (
        <nav className="navbar navbar-expand-lg bg-light mb-4 navBar">
            <div className="container">
                <a className="navbar-brand" href="/">React Todos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto link">
                        <li className="nav-item me-4">
                            <Link className="nav-link active" to="/about">About App</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/author">About Author</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}