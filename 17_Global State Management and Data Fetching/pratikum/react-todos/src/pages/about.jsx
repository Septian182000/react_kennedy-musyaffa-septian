import Header from "../components/header";

export default function About() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="Main">
                    <h1 className="title-about container-sm mb-4">About The App</h1>
                    <p className="desc container-sm">In this app, you can add, delete, submit, and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage.So whether you reload, close your app or reopened it. You still have access to your todos items.</p>
                </div>
            </div>
        </>
    )
}