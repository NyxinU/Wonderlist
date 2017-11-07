import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => (
  currentUser ? welcomeMessage(currentUser, logout) : sessionLinks()
);

const welcomeMessage = (currentUser, logout) => (
  <header>
    <button className="session-delete-button" onClick={logout}>Log Out</button>
  </header>
);

const sessionLinks = () => (
  <div className="homepage">
    <header>
      <h1>Treat Yourself</h1>
      <nav>
        <Link to="/login">Log in</Link>
        &nbsp; | &nbsp;
        <Link to="/signup">Sign up</Link>
      </nav>
    </header>
    <img src='http://marlacummins.com/wp-content/uploads/2014/10/To_Do_List.png'/>
</div>
);

export default Greeting;
