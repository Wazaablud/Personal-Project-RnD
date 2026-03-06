import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ToDo } from '../types/todo';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const ToDoApp: React.FC = () => {
    const { user, logout } = useAuth();
    const [todos, setTodos] = useState<ToDo[]>(() => {
        const saved = localStorage.getItem('todos');
        if (saved) {
            try {
                return JSON.parse(saved) as ToDo[];
            } catch (e) {
                return [];
            }
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        const newTodo: ToDo = {
            id: Date.now().toString(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: string) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div style={{maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                }}
            >
                <h1>Welcome, {user?.username}!</h1>
                <button onClick={logout} style={{ padding: '8px 16px' }}>
                    Logout
                </button>
            </div>
            <ToDoForm onAdd={addTodo} />
            <ToDoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
    );
};

export default ToDoApp;