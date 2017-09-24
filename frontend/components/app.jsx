import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import TasksIndexContainer from './tasks/tasks_index_container';
import TaskDetailContainer from './tasks/task_detail_container';


const App = () => (
  <div className="whole-page">
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/tasks" component={TasksIndexContainer} />
      <Route exact path="/" component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
