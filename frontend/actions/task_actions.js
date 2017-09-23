import * as TaskUtil from '../util/task_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const requestAllTasks = () => dispatch => (
  TaskUtil.fetchTasks().then(tasks => dispatch(receiveAllTasks(tasks)))
);

export const requestTask = id => dispatch => (
  TaskUtil.fetchTask(id).then(task => dispatch(receiveTask(task))
  ,err => dispatch(receiveTaskErrors(err.responseJSON)))
);

export const createTask = task => dispatch => (
  TaskUtil.createTask(task).then(task => dispatch(receiveTask(task))
  ,err => dispatch(receiveTaskErrors(err.responseJSON)))
);

export const updateTask = task => dispatch => (
  TaskUtil.updateTask(task).then(task => dispatch(receiveTask(task))
  ,err => dispatch(receiveTaskErrors(err.responseJSON)))
);

export const deleteTask = id => dispatch => (
  TaskUtil.destroyTask(id).then(task => dispatch(removeTask(task))
  ,err => dispatch(receiveTaskErrors(err.responseJSON)))
);



export const receiveAllTasks = tasks => ({
  type: RECEIVE_ALL_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const removeTask = task => ({
  type: REMOVE_TASK,
  task
});

export const receiveTaskErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
