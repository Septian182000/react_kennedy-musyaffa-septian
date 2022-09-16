const Header = (props) => {
    return (
        <nav className="navbar bg-light mb-4">
            <div className="container-fluid">
                <span className="navbar-brand head">{props.name}</span>
            </div>
        </nav>
    )
};

export default Header;