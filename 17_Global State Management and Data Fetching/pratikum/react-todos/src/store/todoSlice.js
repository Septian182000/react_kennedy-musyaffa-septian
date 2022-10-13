import { createSlice } from "@reduxjs/toolkit"
import dummy from "../data/dummy.json"
import { v4 as uuid } from "uuid";

const initialValue = dummy

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: initialValue
    },
    reducers: {
        hapusTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        },
        tambahTodo: (state, action) => {
            const NEWTODOS = {
                id: uuid(),
                title: action.payload,
                completed: false
            }
            state.todos =  [...state.todos, NEWTODOS]
        },
        cekTodo: (state, action) => {
            state.todos = state.todos.map((todolist) =>
              todolist.id === action.payload
                ? { ...todolist, completed: !todolist.completed }
                : todolist
            );
        }
    }
})

export const { hapusTodo, tambahTodo, cekTodo } = todoSlice.actions

export default todoSlice.reducer