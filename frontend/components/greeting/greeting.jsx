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
      <h1 >
        <Link className="nav-to-splash" to="/">Wonderlist</Link>
      </h1>
      <nav>
        <Link to="/login">Log in</Link>
        &nbsp; | &nbsp;
        <Link to="/signup">Sign up</Link>
      </nav>
    </header>
    <div className="intro">
      <div className="intro-message">
        <h1 className="intro-message-title">Keep your life in sync</h1>
        <p className="intro-message-body">Wonderlist is the easiest way to get stuff done. Whether you’re <br />
          planning a holiday, sharing a shopping list with a partner or <br />
          managing multiple work projects, Wunderlist is here to help you <br />
          tick off all your personal and professional to-dos.</p>
      </div>
      <img className="intro-demo-pic" src="http://res.cloudinary.com/dhsavotqt/image/upload/v1510722670/Wonderlist_Demo_je5s1v.png" alt="" />      
    </div>
    <div className="feature">
      <img className="feature-img" src="http://res.cloudinary.com/dhsavotqt/image/upload/v1510860303/Screen_Shot_2017-11-16_at_11_q8wxzd.png" alt=""/>
      <div className="feature-task">
        <div className="feature-task-title">
          <img className="feature-task-checkbox" src="https://www.wunderlist.com/site/images/home/checkmark.svg" />
          <h3 className="feature-task-h3">Plan for anything</h3>
        </div>
        <p>Organize and share your to-do, work, grocery, movies and <br/>
        household lists. No matter what you’re planning, how big<br/>
        or small the task may be, Wunderlist makes it super easy to<br/>
        get stuff done.</p>
      </div>
    </div>
    <footer>
      <button className="clickable" onClick={() => { window.open("https://www.linkedin.com/in/yiunixon/") }}>
        <i className="fa fa-linkedin-square"  aria-hidden="true"></i>
        linkedin
      </button>
      &nbsp; | &nbsp;
      <button className="clickable github" onClick={() => { window.open("https://github.com/NyxinU") }}>
        <i className="fa fa-github-square"  aria-hidden="true"></i>
        github
      </button>
    </footer>
</div>
);

export default Greeting;
