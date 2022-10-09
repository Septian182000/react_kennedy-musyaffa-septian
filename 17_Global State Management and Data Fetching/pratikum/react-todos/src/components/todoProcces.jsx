import ListTodo from "./listTodo";
import { useSelector } from "react-redux";

export default function WillProcces () {
    const listOfTodo = useSelector((state) => state.todos);
    
    return (
        <>
            <div className="list-todos mt-4">
                <ul>
                    {listOfTodo.map((list) => (
                        <ListTodo key={list.id} todo={list} />
                    ))}
                </ul>
            </div>
        </>
    )
}