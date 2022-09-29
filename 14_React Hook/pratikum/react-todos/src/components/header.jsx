export default function Header (title) {
    return (
        <nav className="navbar bg-light mb-4">
            <div className="container">
                <span className="navbar-brand head">{title.name}</span>
            </div>
        </nav>
    )
}