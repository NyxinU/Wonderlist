import {
  RECEIVE_TASK,
  REMOVE_TASK,
  RECEIVE_TASK_ERRORS,
  CLEAR_ERRORS,
} from '../actions/task_actions';

const _nullErrors = [];

const TaskErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK_ERRORS:
      return action.taskErrors;
    case RECEIVE_TASK:
      return _nullErrors;
    case REMOVE_TASK:
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default TaskErrorsReducer;
