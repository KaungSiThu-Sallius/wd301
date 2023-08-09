import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}

interface TaskFormState {
    title: string;
    description: string;
    dueDate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: "",
            description: "",
            dueDate: "",
        }
    }

    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.title,
            description: this.state.description,
            dueDate: this.state.dueDate
        };
        this.props.addTask(newTask);
        this.setState({ title: "", description: "", dueDate: "" });
    };

    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ title: event.target.value });
    };


    descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ description: event.target.value });
    };

    dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ dueDate: event.target.value });
    };

    render() {
        return (
            <form onSubmit={this.addTask}>
                <input type="text" value={this.state.title} onChange={this.titleChanged} id="todoTitle" required />
                <input type="text" value={this.state.description} onChange={this.descriptionChanged} id="todoDescription" />
                <input type="text" value={this.state.dueDate} onChange={this.dueDateChanged} id="todoDueDate" required />
                <button type="submit" id="addTaskButton">Add item</button>
            </form>
        )
    }
}
export default TaskForm;