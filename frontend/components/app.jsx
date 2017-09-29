import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session_form/session_form_container';
import ListsIndexContainer from './lists/lists_index_container';
import HomepageIndexContainer from './tasks/tasks_index_container';
import TaskDetailContainer from './tasks/task_detail_container';
import GreetingContainer from './greeting/greeting_container';
import TestComponent from './tasks/test_component';

const App = () => (
  <div className="wrapper">
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/lists/search" component={HomepageIndexContainer} />
      <ProtectedRoute path="/lists/:listId" component={HomepageIndexContainer} />
      <ProtectedRoute path="/lists" component={HomepageIndexContainer} />
      <AuthRoute eact path="/" component={GreetingContainer}/> 
    </Switch>
  </div>
);

export default App;


// <Route exact path="/" component={GreetingContainer} />
