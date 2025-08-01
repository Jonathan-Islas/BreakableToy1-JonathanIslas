import React, { useState, useEffect} from "react";
import axios from 'axios';

interface ToDo {
    id: string;
    text: string;
    dueDate: number;
    status: boolean;
    finishedDate?: number;
    priority: number;
    createdDate: number;
}


const apiClient = axios.create({
    baseURL: 'http://localhost:9090/api',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:9090',
        'Content-Type': 'application/json',
    },
});


// export const fetchToDos = async () => {
//     try {
//         const response = await apiClient.get<ToDo[]>('/todos');
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching todos', error);
//     }
// };