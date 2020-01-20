import store from '../store';
export const ADD_TASK = 'ADD_TASK';
export const FETCH_TASK = 'FETCH_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addNew = newTask => {
  const tasks = store.getState().tasks.tasks;
  const newTasks = [...tasks, newTask];
  return {type: ADD_TASK, payload: newTasks};
};

export const deleteTask = id => {
  const tasks = store.getState().tasks.tasks;
  const newTasks = tasks.filter(item => item.id !== id);
  return {type: DELETE_TASK, payload: newTasks};
};

export const editTask = item => {
  const tasks = store.getState().tasks.tasks;
  const newTasks = tasks.find(child => child.id === item.id);
  newTasks.isCompleted = !item.isCompleted;
  return {type: EDIT_TASK, payload: [...tasks]};
};
