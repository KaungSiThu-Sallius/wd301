/* eslint-disable react/prop-types */

import './TaskCard.css';
const TaskCard = (props) => {
  let isCompleted = "";
  if (props.isCompleted == "0") {
    isCompleted = "Due on";
  } else {
    isCompleted = "Completed on";
  }
  return (
    <div className='TaskItem border-2 rounded mb-5 mx-3 p-4'>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{props.title}</h2>
      <p className='text-gray-600'>{isCompleted}: {props.date}</p>
      <p className='text-gray-600'>Assignee: {props.assignee}</p>
    </div>
  )
}

export default TaskCard;