import { useState } from "react";
import { v4 as uuid } from "uuid";
import Header from "./header"
import FormTodos from "./form";
import WillProcces from "./todoProcces";
import "../assets/style.css"
import dummy from '../data/dummy.json'


export default function Index () {
    const [listTodos, setTodos] = useState([...dummy]);

    const addListData = (input) => {
        let dataTodos = [...listTodos];
        dataTodos = [
            ...dataTodos,
            {
                id: uuid(),
                title: input,
                completed: false,
            }
        ];
        setTodos(dataTodos);
    }

    const deleteListData = (id) => {
        const deleteTodos = listTodos.filter(todo => {
            return todo.id !== id;
        });
        setTodos(deleteTodos);
    }

    const checkedListData = (value) => {
        let checkedData = listTodos.map(list => list.id === value.id ? {...list, completed: !list.completed } : list);
        setTodos(checkedData);
    }


    return (
        <>
            <Header name="React To do List"/>
            <FormTodos addData = {addListData}/>
            <WillProcces 
                listDataTodos = {listTodos}
                deleteData = {deleteListData}
                checkData = {checkedListData}
            />
        </>
    )
}