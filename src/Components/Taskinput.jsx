
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../Redux/Action';

const TaskInput = () => {  
    //Define state variables
    const [taskName, setTaskName] = useState('');
    const [nextId, setNextId] = useState(1); // Initialize the next ID to 1
    const dispatch = useDispatch();



    //function to handle adding a task
    const handleAddTask = () => {
        if (taskName.trim() === '') {
            alert('Task name cannot be empty!');
            return;
        }

        const newTask = { id: nextId, name: taskName };
        //action to add the new task to the store
        dispatch(addTask(newTask));
        setTaskName('');
        //Increment the next ID for the next task
        setNextId(nextId + 1);
    };


    //on press enter then add
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };
    //Render the task input component
    return (

        <div className="bg- white py-8">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-[300px]  sm:max-w-md">
                        <div className="flex items-center border-b border-b-2 border-[#64979C] py-2">
                            <input
                                className="appearance-none bg-transparent border-none w-full text-xl text-gray-400  mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Add a new task"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button
                                className="flex-shrink-0 bg-[#024831] hover:bg-purple-900 border-[#024831] hover:border-purple-900 text-sm border-4 text-white py-1 px-4 rounded"
                                type="button"
                                onClick={handleAddTask}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskInput;
