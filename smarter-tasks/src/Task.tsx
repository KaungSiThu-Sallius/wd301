/* eslint-disable @typescript-eslint/no-unused-vars */

import './TaskCard.css';

interface TaskProp {
  title: string;
  description: string;
  dueDate: string;
  onDelete: () => void;
}

const Task = (props: TaskProp) => {

  const deleteTask = () => {
    props.onDelete();
  }

  return (
    <li className="TaskItem shadow-md border border-slate-100">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-base font-bold my-1">{props.title}</h2>
          <p className="text-sm text-slate-500">{props.dueDate}</p>
          <p className="text-sm text-slate-500">Description: {props.description}</p>
        </div>
        <div>
          <button onClick={deleteTask} className="deleteTaskButton bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        </div>
      </div>

    </li>
  );
};

export default Task;