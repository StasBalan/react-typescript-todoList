import React from 'react';

import TasksListItem from './TasksListItem';

import { Task } from '../models/task';

interface Props {
    tasks: Task[];
    onDelete: (taskToDelete: Task) => void;
}

const TasksList: React.FC<Props> = ({tasks, onDelete}) => (
    <ul>
        {tasks.map((task, index) => {
            return <TasksListItem  key={index}
                                   task={task}
                                   onDelete={onDelete}/>
        })}
    </ul>
);

export default TasksList;