import { combineReducers } from 'redux';

import TasksReducer from './tasks_reducer';
import ListsReducer from './lists_reducer';

const EntitiesReducer = combineReducers({
  tasks: TasksReducer,
  lists: ListsReducer
});

export default EntitiesReducer;
