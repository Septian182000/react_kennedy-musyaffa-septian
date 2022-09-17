import Header from './header';
import "../assets/style.css"
import { listData } from '../data/todos';

const Home = () => {
    return (
        <>
            <Header name="To Do App"/>
            <div className="container">
                <ul className="radius">
                    {listData.map((listTodo) => (
                        <li key={listTodo.id} className={listTodo.completed ? "finished" : "unfinished"}>
                            {listTodo.title}
                        </li>
                    ))}
                </ul>
            </div>
            
        </>
    )
}

export default Home;