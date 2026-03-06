import React, { useState } from 'react';

interface ToDoFormProps {
    onAdd: (text: string) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default ToDoForm;