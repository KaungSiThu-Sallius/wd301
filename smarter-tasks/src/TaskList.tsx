import Task from "./Task";
import { TaskItem } from "./types.ts";

interface Props {
    tasks: TaskItem[];
    onDeleteTask: (index: number) => void;
}


const TaskList = (props: Props) => {
    const list = props.tasks.map((task, idx) => (
        <Task
            key={idx}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            onDelete={() => props.onDeleteTask(idx)}
        />
    ));
    return <ul>{list}</ul>;
};

export default TaskList