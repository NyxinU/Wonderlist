import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <h2> Hey! </h2>
      <GreetingContainer />
    </header>
    
    <Route path="/login" component={SessionFormContainer} />
  </div>
);

export default App;
