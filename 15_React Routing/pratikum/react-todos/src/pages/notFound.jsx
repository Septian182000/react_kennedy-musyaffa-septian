import Header from "../components/header"
import NotFoundImg from "../assets/notfound.jpg"

export default function NotFound(){
    return (
    <>
        <Header/>
        <div className="container">
            <div className="Main">
                <img className="container-sm notFound" src={NotFoundImg} alt="404"/>
            </div>
        </div>
    </>
    )
}