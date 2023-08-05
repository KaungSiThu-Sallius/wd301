import React from "react";
import TaskCard from "./TaskCard"
import './index.css';
function App() {
  interface taskData {
    title: string;
    date: string;
    assignee: string;
  }

  const task1:taskData={
    title: "Build the webiste with static content",
    date: "10th April",
    assignee: "Taj S",
  }

  const task2:taskData={
    title: "Create Blog",
    date: "12th April",
    assignee: "Hein",
  }

  const task3:taskData={
    title: "Go to Music Club",
  
    date: "12th April",
    assignee: "Kaung",
  }

  const task4:taskData={
    title: "Get approval from principal",

    date: "10th April",
    assignee: "Demonhan",
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold pt-4 py-3">Smarter Tasks</h1>
      <p className="text-lg pb-6 text-gray-600"><span className="font-bold">Project: </span>Graduation Final Year Project (Revamp Coding Webiste)</p>
      <div className="grid grid-cols-2 gap-6">
        <div className="border rounded overflow-hidden shadow-lg p-4">
          <h1 className="text-2xl font-bold text-center text-gray-600 pb-5">Pending</h1>
          <TaskCard dueDate={task1.date} title={task1.title}  assigneeName={task1.assignee} />
          <TaskCard dueDate={task2.date} title={task2.title} assigneeName={task2.assignee} />
          <div className="mx-3 mb-4">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-600  font-bold py-2 px-4 rounded w-full">
              + New Task
            </button>
          </div>

        </div>
        <div className="border rounded overflow-hidden shadow-lg p-4">
          <h1 className="text-2xl font-bold text-center text-gray-600 pb-5">Done</h1>
          <TaskCard title={task3.title}  completedAtDate={task3.date} assigneeName={task3.assignee} />
          <TaskCard title={task4.title} completedAtDate={task4.date} assigneeName={task4.assignee} />
        </div>
      </div>

    </div>
  )
}


export default App
