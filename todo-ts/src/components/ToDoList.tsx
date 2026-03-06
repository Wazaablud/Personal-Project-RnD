import React from 'react';
import { ToDo } from '../types/todo';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
    todos: ToDo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return <p>No tasks yet! Add one above.</p>;
    }

    return (
        <ul>
            {todos.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default ToDoList;