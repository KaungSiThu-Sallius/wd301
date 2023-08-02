import TaskCard from "./TaskCard"
import './index.css';
function App() {

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold pt-4 py-3">Smarter Tasks</h1>
      <p className="text-lg pb-6 text-gray-600"><span className="font-bold">Project: </span>Graduation Final Year Project (Revamp Coding Webiste)</p>
      <div className="grid grid-cols-2 gap-6">
        <div className="border rounded overflow-hidden shadow-lg p-4">
          <h1 className="text-2xl font-bold text-center text-gray-600 pb-5">Pending</h1>
          <TaskCard title="Build the webiste with static content" isCompleted="0" date="10th April" assignee="Taj S" />
          <TaskCard title="Create Blog" isCompleted="0" date="10th April" assignee="Hein" />
          <div className="mx-3 mb-4">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-600  font-bold py-2 px-4 rounded w-full">
              + New Task
            </button>
          </div>

        </div>
        <div className="border rounded overflow-hidden shadow-lg p-4">
          <h1 className="text-2xl font-bold text-center text-gray-600 pb-5">Completed</h1>
          <TaskCard title="Go to Music Club" isCompleted="1" date="12th April" assignee="Kaung" />
          <TaskCard title="Get approval from principal" isCompleted="1" date="10th April" assignee="Demonhan" />
        </div>
      </div>

    </div>
  )
}


export default App
