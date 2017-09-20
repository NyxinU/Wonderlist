import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';




document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

// testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = SessionApiUtil.login;
  window.logout = SessionApiUtil.logout;
  window.signup = SessionApiUtil.signup;
// testing end

  const root = document.getElementById('root');
  ReactDOM.render( <Root store={ store }/> , root);
});
