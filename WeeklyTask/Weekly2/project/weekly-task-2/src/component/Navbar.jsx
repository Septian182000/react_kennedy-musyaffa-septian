import logo from '../assets/image/genshinW.png'

export default function Header(){
    return(
        <div className="header">
        <nav className="navbar navbar-expand-lg bg-light navBar">
            <div className="container">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" width="160" height="60" className="d-inline-block align-text-top"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                <a className="nav-link fs-5 ms-4 active text-light" aria-current="page" href="/">Home</a>
                <a className="nav-link fs-5 ms-4 text-light" href="/">Features</a>
                <a className="nav-link fs-5 ms-4 text-light" href="/">Character</a>
                <a className="nav-link fs-5 ms-4 fw-bold text-light" href='/'>Login</a>
                </div>
            </div>
            </div>
        </nav>
        </div>
    )
}