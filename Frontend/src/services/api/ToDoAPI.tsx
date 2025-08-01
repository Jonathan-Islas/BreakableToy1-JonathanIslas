// src/api/todosApi.ts
import axios from 'axios';
import type { ToDo } from '../../utils/ToDo';

export const apiClient = axios.create({
    baseURL: 'http://localhost:9090/api',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:9090',
        'Content-Type': 'application/json',
    },
});

// Fetch all todos
export const fetchToDos = async (): Promise<ToDo[]> => {
    try {
        const response = await apiClient.get<ToDo[]>('/todos');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};


// ToDo Delete Button action
export const deleteToDo = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this ToDo?')) {
        console.log('Uhm should be deleting');
        return await apiClient.delete<string>(`todos/${id}`);
    }
}

// Create ToDo
export const createToDo = async (formJson: ToDo) => {
    const response = await apiClient.post<ToDo>('/todos', formJson);
}

// complete or reopen ToDo (mark as done or undone)
export const changeToDoStatus = async (id: string, isFinished: boolean) => {
    try {
        const doneString = !isFinished ? "Undone" : "done";
        if (window.confirm(`Are you sure you want to mark this ToDo as ${doneString}?`)) {
            const response = await apiClient.patch(`todos/${id}/done`, {
                isFinished: isFinished
            });
        }
    } catch (error) {
        throw error;
    }

}

export default fetchToDos;