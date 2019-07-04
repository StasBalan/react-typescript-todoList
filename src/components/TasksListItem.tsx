import React from 'react';

import { Task } from '../models/task';

interface Props {
    task: Task;
    onDelete: (taskToDelete: Task) => void;
}

class TasksListItem extends React.Component<Props> {

    private onDeleteTask = () => {
        const { onDelete, task } = this.props;
        onDelete(task);
    };

    render() {
        const { task } =this.props;
        return (
            <li>
                {task.name}
                <button onClick={this.onDeleteTask}>X</button>
            </li>
        );
    }
}

// const TasksListItem: React.FC<Props> = ({task, onDelete}) => {
//
//     const onDeleteTask = () => {
//       onDelete(task);
//     };
//
//     return (
//         <li>
//             {task.name}
//             <button onClick={onDeleteTask}>X</button>
//         </li>
//     );
// };

export default TasksListItem;