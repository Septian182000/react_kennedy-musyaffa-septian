import { useState } from "react";
import { useDispatch } from "react-redux";
import { tambahTodo } from "../store/passengerSlice";

export default function FormTodos() {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handlerOnChange = (e) => {
        setInput(e.target.value);
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        let newList = input ? dispatch(tambahTodo(input)) : alert("Title Can't be empty");
        setInput("");
        return newList;
    }

    return (
        <div className="container">
            <div className="content">
                <h1 className="title-form mb-4">Todos</h1>
                <form>
                    <input type="text" 
                        placeholder="Add Title..." 
                        onChange={handlerOnChange} 
                        value={input}
                        className="me-4 input-text"
                    />
                    <input type="submit" 
                        onClick={handleOnSubmit}
                        className="btn btn-success"/>
                </form>
                
            </div>
        </div>
    )
}