import React, { useEffect } from "react";
import ListTodo from "./listTodo";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo } from "../store/features/todoSlice";

export default function WillProcces () {
    const dispatch = useDispatch()
    const listOfTodo = useSelector((state) => state.todo.data);
    const componentStatus = useSelector((state) => state.todo.componentStatus);

    useEffect(() => {
        dispatch(fetchTodo());
    }, [componentStatus, dispatch]);
    
    return (
        <>
            <div className="list-todos mt-4">
                <ul>
                    {listOfTodo.map((todo) => (
                        <ListTodo key={todo.id} todo={todo}/>
                    ))}
                </ul>
            </div>
        </>
    )
}