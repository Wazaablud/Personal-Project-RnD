import React from 'react';
import { ToDo } from '../types/todo';

interface ToDoItemProps {
    todo: ToDo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, onToggle, onDelete }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
};

export default ToDoItem;