import { axiosInstance } from "../config/axiosInstance";

const todoAPI = {
    async getAllTodo() {
        try {
          const response = await axiosInstance.get("/todos");
          console.log(response);
          return response;
        } catch (err) {
          console.log(err);
        }
      },
      async createTodos(data) {
        try {
          const response = await axiosInstance.post("/todos", data);
          return response;
        } catch (error) {
          console.log(error);
        }
      },
      async updateTodo(data) {
        try {
          const id = data.id;
          const response = await axiosInstance.patch(`/todos/${id}`, data);
          return response;
        } catch (error) {
          console.log(error);
        }
      },
      async deleteTodoById(id) {
        try {
          const response = await axiosInstance.delete(`/todos/${id}`);
          return response;
        } catch (error) {
          console.log(error);
        }
      },
};

export default todoAPI