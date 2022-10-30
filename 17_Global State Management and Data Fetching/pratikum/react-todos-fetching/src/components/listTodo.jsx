import { useDispatch } from "react-redux"
import { deleteTodo, updateTodo } from "../store/features/todoSlice"

export default function ListTodo(todo) {
    const dispatch = useDispatch()
    return (
        <>
            <div className={todo.todo.completed ? 'completed' : 'unCompleted'}>
                <div className="list" >
                    <div>
                        <input
                            type="checkbox"
                            onClick={() => dispatch(updateTodo(todo.todo.id))}
                            defaultChecked={todo.todo.completed ? true : !true}
                        />
                    </div>    
                    <div>
                        <p>{todo.todo.title}</p>
                        <p>{todo.todo.nama}</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-trash delete" onClick={() => dispatch(deleteTodo(todo.todo.id))}></i>
                    </div>
                </div>
            </div>
        </>
    )
}