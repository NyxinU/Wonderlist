import {
  RECEIVE_ALL_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
} from '../actions/task_actions';

import merge from 'lodash/merge';

const TasksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ALL_TASKS:
      return merge({}, action.tasks);
    case RECEIVE_TASK:
      const newTask = {[action.task.id]: action.task};
      return merge({}, state, newTask);
    case REMOVE_TASK:
      const newState = merge({}, state);
      delete newState[action.task.id];
      return newState;
    default:
      return state;
  }
};

export default TasksReducer;
