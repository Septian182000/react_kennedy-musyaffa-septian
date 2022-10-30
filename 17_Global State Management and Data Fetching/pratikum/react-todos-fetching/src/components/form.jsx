import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../store/features/todoSlice";

export default function FormTodos() {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handlerOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput(name, value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get("title");
        const nama = formData.get("nama");
        let newToDoList = !input
          ? alert("Title can't be empty")
          : dispatch(createTodo({ title, nama }));
    
        return newToDoList;
      };

    return (
        <div className="container">
            <div className="content">
                <h1 className="title-form mb-4">Todos</h1>
                <form onSubmit={handleOnSubmit}>
                    <input 
                        type="text" 
                        placeholder="Add Title..." 
                        onChange={handlerOnChange} 
                        className="me-4 input-text"
                        name="title"
                    />
                    <input 
                        type="text" 
                        placeholder="Add Title..." 
                        onChange={handlerOnChange} 
                        className="me-4 input-text"
                        name="nama"
                    />
                    <input type="submit" className="btn btn-success"/>
                </form>
                
            </div>
        </div>
    )
}