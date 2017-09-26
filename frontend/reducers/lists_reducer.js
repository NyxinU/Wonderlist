import {
  RECEIVE_ALL_LISTS,
  RECEIVE_LIST,
  REMOVE_LIST,
} from '../actions/list_actions';

import merge from 'lodash/merge';

const ListsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_ALL_LISTS:
      return merge({}, state, action.lists);
    case RECEIVE_LIST:
      const newList = {[action.list.id]: action.list};
      return merge({}, state, newList);
    case REMOVE_LIST:
      const newState = merge({}, state);
      delete newState[action.list.id];
      return newState;
    default:
      return state;
  }
};

export default ListsReducer;
