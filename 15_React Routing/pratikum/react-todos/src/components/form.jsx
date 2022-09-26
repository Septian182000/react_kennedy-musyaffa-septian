import { useState } from "react";

export default function FormTodos({ addData }) {
    const [input, setInput] = useState("");

    const handlerOnChange = (e) => {
        setInput(e.target.value);
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        let newList = input ? addData(input) : alert("Title Can't be empty");
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