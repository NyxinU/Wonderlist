import * as TaskUtil from '../util/task_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';

export const requestAllTasks = () => dispatch => (
  TaskUtil.fetchTasks().then(tasks => dispatch(receiveAllTasks(tasks)))
);

export const requestTask = () => dispatch => (
  TaskUtil.fetchTask().then(task => dispatch(receiveTask(task)))
);

export const createTask = () => dispatch => (
  TaskUtil.createTask().then(task => dispatch(receiveTask(task)))
);

export const updateTask = () => dispatch => (
  TaskUtil.updateTask().then(task => dispatch(receiveTask(task)))
);

export const deleteTask = (id) => dispatch => (
  TaskUtil.destroyTask(id).then(task => dispatch(removeTask(task)))
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
