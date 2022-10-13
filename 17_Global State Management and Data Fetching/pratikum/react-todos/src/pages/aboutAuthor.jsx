import Header from "../components/header";

export default function Author() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="Main">
                    <h1 className="title-about container-sm mb-4">About The Author</h1>
                    <p className="desc container-sm">This app was developed by someone, a self-taught web developer and technical writer.</p>
                </div>
            </div>
        </>
    )
}