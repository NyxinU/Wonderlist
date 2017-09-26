import * as ListUtil from '../util/list_util';

export const RECEIVE_ALL_LISTS = 'RECEIVE_ALL_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const requestAllLists = () => dispatch => (
  ListUtil.fetchLists().then(lists => dispatch(receiveAllLists(lists)))
);

export const requestList = id => dispatch => (
  ListUtil.fetchList(id).then(list => dispatch(receiveList(list))
  ,err => dispatch(receiveListErrors(err.responseJSON)))
);

export const createList = list => dispatch => (
  ListUtil.createList(list).then(list => (dispatch(receiveList(list))
),err => (dispatch(receiveListErrors(err.responseJSON)))
));

export const updateList = list => dispatch => (
  ListUtil.updateList(list).then(list => dispatch(receiveList(list))
  ,err => dispatch(receiveListErrors(err.responseJSON)))
);

export const deleteList = id => dispatch => (
  ListUtil.destroyList(id).then(list => dispatch(removeList(list))
  ,err => dispatch(receiveListErrors(err.responseJSON)))
);



export const receiveAllLists = lists => ({
  type: RECEIVE_ALL_LISTS,
  lists
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const removeList = list => ({
  type: REMOVE_LIST,
  list
});

export const receiveListErrors = listErrors => ({
  type: RECEIVE_LIST_ERRORS,
  listErrors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
