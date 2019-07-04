import React from 'react';
import { Task } from '../models/task';

interface NewTaskFormProps {
    task: Task;
    onAdd: (e: React.FormEvent<HTMLFormElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewTaskForm: React.FC<NewTaskFormProps> = ({ task, onAdd, onChange}) => (
    <form onSubmit={onAdd}>
        <input onChange={onChange} value={task.name}/>
        <button type="submit">Add</button>
    </form>
);

export default NewTaskForm;