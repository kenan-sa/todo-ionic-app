import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/todos';

export interface Todo {
    id?: number;
    title: string;
    description: string;
}

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await axios.get(API_BASE);
    return response.data;
};

export const addTodo = async (todo: Todo): Promise<Todo> => {
    const response = await axios.post(API_BASE, todo);
    return response.data;
};

export const deleteTodo = async (todo: Todo): Promise<void> => {
    await axios.delete(`${API_BASE}/${todo.id}`);
};
