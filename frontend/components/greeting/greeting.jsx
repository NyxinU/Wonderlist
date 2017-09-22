import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => (
  currentUser ? welcomeMessage(currentUser, logout) : sessionLinks()
);

const welcomeMessage = (currentUser, logout) => (
  <div>
    <h2>Don't forget to treat yourself {currentUser.first_name}!</h2>
    <button className="session-delete-button" onClick={logout}>Log Out</button>
  </div>
);

const sessionLinks = () => (
  <div className="homepage">
    <nav className="nav-links">
      <div className="nav-title">Treat Yourself</div>
      <div className="nav-login-logout">
        <Link to="/login">Log in</Link>
        &nbsp; | &nbsp;
        <Link to="/signup">Sign up</Link>
      </div>
    </nav>
  <img className='img' src='https://c2.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/How%20to%20Increase%20Productivity%20Without%20Increasing%20Stress_Header%20Image-1.png'/>
  </div>
);

export default Greeting;
