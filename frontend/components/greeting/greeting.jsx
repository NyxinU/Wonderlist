import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => (
  currentUser ? welcomeMessage(currentUser, logout) : sessionLinks()
);

const welcomeMessage = (currentUser, logout) => (
  <div>
    <h2>Don't forget to treat yourself {currentUser.first_name}!</h2>
    <button onClick={logout}>Log Out</button>
  </div>
);

const sessionLinks = () => (
  <div>
    <Link to="/login">Log in</Link>
    &nbsp; | &nbsp;
    <Link to="/signup">Sign up</Link>
  </div>
);

export default Greeting;
