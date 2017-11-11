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
    <div className="intro">
      <h1 className="intro-message-title">Keep your life in sync</h1>
      <p className="intro-message-body">Wunderlist is the easiest way to get stuff done. Whether you’re <br/> 
      planning a holiday, sharing a shopping list with a partner or <br/> 
      managing multiple work projects, Wunderlist is here to help you <br/>
      tick off all your personal and professional to-dos.</p>
    </div>
</div>
);

export default Greeting;
