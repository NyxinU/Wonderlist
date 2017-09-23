import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './actions/session_actions';
import * as TaskUtil from './actions/task_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

// testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = SessionApiUtil.login;
  window.logout = SessionApiUtil.logout;
  window.signup = SessionApiUtil.signup;
  window.requestAllTasks = TaskUtil.requestAllTasks;
  window.requestTask = TaskUtil.requestTask;
  window.createTask = TaskUtil.createTask;
  window.updateTask = TaskUtil.updateTask;
  window.deleteTask = TaskUtil.deleteTask;
// testing end

  const root = document.getElementById('root');
  ReactDOM.render( <Root store={ store }/> , root);
});
