// src/context/TodosContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import fetchToDos from './ToDoAPI';
import {type ToDo}  from '../../utils/ToDo';

interface TodosContextType {
  toDos: ToDo[];
  loading: boolean;
  error: string | null;
  refreshToDos: () => void;
}

const TodosContext = createContext<TodosContextType>({
  toDos: [],
  loading: true,
  error: null,
  refreshToDos: () => {},
});

export const TodosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTodos = async () => {
    setLoading(true);
    try {
      const data = await fetchToDos();
      setToDos(data);
      setError(null);
    } catch (err) {
      setError('Failed to load todos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <TodosContext.Provider value={{ toDos: toDos, loading, error, refreshToDos: loadTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useToDos = () => useContext(TodosContext);
