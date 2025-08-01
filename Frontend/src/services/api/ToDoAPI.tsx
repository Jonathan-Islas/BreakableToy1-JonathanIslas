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

export const fetchToDos = async (): Promise<ToDo[]> => {
    try {
        const response = await apiClient.get<ToDo[]>('/todos');
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};



export default fetchToDos;