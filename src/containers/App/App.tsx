import React, { Component } from 'react';
import './App.css';

import NewTaskForm from '../../components/NewTaskForm';
import TasksList from '../../components/TasksList';

import { Task } from '../../models/task';

interface State {
    newTask: Task;
    tasks: Task[];
}

class App extends Component<{}, State> {

    state = {
        newTask: {id: 1, name: ''},
        tasks: []
    };

    private onAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState((state) => ({
            newTask: {
                id: state.newTask.id + 1,
                name: ''
            },
            tasks: [...state.tasks, state.newTask]
        }));
    };

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            newTask: {
                ...this.state.newTask,
                name: e.target.value
            }
        });
    };

    private onDeleteTask = (taskToDelete: Task) => {
        this.setState((state) => ({
            tasks: [
                ...state.tasks.filter((task) => {
                    return task.id !== taskToDelete.id;
                })
            ]
        }));
    };

    render() {
        const {newTask, tasks} = this.state;
        // @ts-ignore
        return (
            <div>
                <h2>Todo list in TypeScript</h2>
                <NewTaskForm task={newTask}
                             onAdd={this.onAdd}
                             onChange={this.handleChange}/>
                <TasksList tasks={tasks}
                           onDelete={this.onDeleteTask}/>
            </div>
        );
    }
}
export default App;
