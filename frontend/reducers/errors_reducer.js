import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import TaskErrorsReducer from './task_errors_reducer';

const ErrorsReducer = combineReducers({
  task: TaskErrorsReducer,
  session: SessionErrorsReducer
});

export default ErrorsReducer;
