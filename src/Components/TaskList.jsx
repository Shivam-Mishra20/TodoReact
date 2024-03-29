 
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
 import {deleteTask } from '../Redux/Action';

const TaskList = () => {
    //Get the tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
 
  //a function to handle task deletion
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  //Render the list of tasks
  return (
    <div className="  py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[300px]  sm:max-w-md">
            <ul className=" bg-white  shadow-md rounded px-6  py-3 mb-4">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center border-b border-gray-300 py-2"
                >
                  <span className="flex-grow text-gray-700">{task.name}</span>
                  <button
                    className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-xs border-4 text-white py-1 px-2 rounded"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
