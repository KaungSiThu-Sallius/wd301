import "./TaskCard.css";

//import { TaskItem } from "./types";

interface TaskItem {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  onDelete: (titleid: number) => void;
}
const Task = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <li>
        <a href={`/tasks/${props.id || ""}`}>
          <h2 className="text-base font-bold my-1">{props.title}</h2>
        </a>
        <p className="text-sm text-slate-500">Due Date: {props.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.description}
        </p>
        <button
          className="deleteTaskButton"
          onClick={() => props.onDelete(props.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Task;