//ction types as constants
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

//Action creator for adding a task
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});  

//Action creator for deleting a task
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});