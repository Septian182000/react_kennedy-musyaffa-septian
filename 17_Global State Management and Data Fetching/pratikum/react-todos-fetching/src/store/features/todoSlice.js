import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import todoAPI from "../../api/todos.api";

const initialState = {
    data: [],
    componentStatus: false,
};

export const fetchTodo = createAsyncThunk("fetch/todos", async() => {
    try {
        const response = await todoAPI.getAllTodo();
        return response.data.todos;
    } catch(error) {
        console.log(error);
    }
})

export const createTodo = createAsyncThunk("create/todos", async(data) => {
    try {
        const response = await todoAPI.createTodos(data);
        return response.data.insert_todos;
    } catch(error) {
        console.log(error);
    }
})

export const updateTodo = createAsyncThunk("update/todos", async ({ id, completed }) => {
    try {
      const response = await todoAPI.updateTodo({ id, completed });
      return response.data.update_todos;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteTodo = createAsyncThunk("delete/todos", async (id) => {
    try {
      const response = await todoAPI.deleteTodoById(id);
      return response.data.delete_todos.returning[0];
    } catch (error) {
      console.log(error);
    }
});

const todoSlice = createSlice({
    name: "todos",
    initialState,
    extraReducers(builder){
        builder
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(createTodo.fulfilled, (state, action) =>{
                state.data.push(action.payload);
                state.componentStatus = !state.componentStatus;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.fetchStatus = !state.fetchStatus;
                state.data = state.data.filter((item) => item.id !== action.payload.id);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.componentStatus = !state.componentStatus;
            })
    }
})

export default todoSlice.reducer;