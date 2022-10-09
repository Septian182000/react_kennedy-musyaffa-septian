import { useDispatch } from "react-redux"
import { hapusTodo, cekTodo } from "../store/todoSlice"

export default function ListTodo(todo) {
    const dispatch = useDispatch()
    return (
        <>
            <div className={todo.todo.completed ? 'completed' : 'unCompleted'}>
                <div className="list">
                    <div>
                        <input
                            type="checkbox"
                            onClick={() => dispatch(cekTodo(todo.todo.id))}
                            defaultChecked={todo.todo.completed ? true : !true}
                        />
                    </div>    
                    <div>
                        <p>{todo.todo.title}</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-trash delete" onClick={() => dispatch(hapusTodo(todo.todo.id))}></i>
                    </div>
                </div>
            </div>
        </>
    )
}