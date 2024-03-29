 //Import the action types
import { ADD_TASK, DELETE_TASK } from './Action';
//define intial state
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],//intial task from local storage
};
// reducer function
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        //ADD_TASK action
      case ADD_TASK:
        //a new array with the existing tasks and the new task
        const newTasks = [...state.tasks, action.payload];
        //Save the new tasks array to local storage
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        //a new state object with the updated tasks array
        return {
          ...state,
          tasks: newTasks,
        };
        //DELETE_TASK action
      case DELETE_TASK:
        const updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return {
          ...state,
          tasks: updatedTasks,
        };
        //default case (no action type matches)
      default:
        return state;
    }
  };
export default taskReducer;
