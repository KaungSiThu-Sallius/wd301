/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import './TaskCard.css';

interface TaskProp {
  title: string;
  description: string;
  dueDate: string;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
    </div>
  );
};

export default Task;