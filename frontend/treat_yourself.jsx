import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './actions/session_actions';
import * as ListUtil from './actions/list_actions';
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


  const root = document.getElementById('root');
  ReactDOM.render( <Root store={ store }/> , root);
});
