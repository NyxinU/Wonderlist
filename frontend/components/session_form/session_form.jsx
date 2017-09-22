import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.update = this.update.bind(this);
    this.printUsername = this.printUsername.bind(this);
    this.printPassword = this.printPassword.bind(this);
    this.loginForm = this.loginForm.bind(this);
    this.signUpForm = this.signUpForm.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      console.log(this.props);
      this.props.clearErrors();
    }
  }

  handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.processForm(user);
}

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup" className="btn-info">Sign up</Link>;
    } else {
      return <Link to="/login" className="btn-info">Log in</Link>;
    }
  }

  demoLogin(e) {
    e.preventDefault();
    const username = "invisibleman";
    const password = "teddywinters";

    this.printUsername(username);
    setTimeout(() => this.printPassword(password), 1300);

    setTimeout(()=> {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    }, 2800);
  }

  printUsername(username) {
    for (let i = 0; i < username.length; i++) {
      setTimeout(() => this.setState({ username: username.slice(0, i + 1) }),i * 100);
    }
  }

  printPassword(password) {
    for (let i = 0; i < password.length; i++) {
      setTimeout(() => this.setState({ password: password.slice(0, i + 1) }),i * 100);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
  return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  );
}

  loginForm() {
    return (
      <form onSubmit={this.handleSubmit} className="session-form-box">
        <div>Been here before? Welcome Back!</div>
        {this.renderErrors()}
        <div className="session-form">
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className = "session-form-input"
              placeholder="Username"
              />
          <br/>
            <input type="password"
               value={this.state.password}
               onChange={this.update('password')}
               className="session-form-input"
               placeholder="Password"
              />
          <br/>
          <input type="submit"
            className="session-create-button"
            value={"Log in"} />
          <br/>
          <button onClick={this.demoLogin} className="session-create-button">
            Demo Login
          </button>
        </div>
      </form>
    );
  }

  signUpForm() {
    return (
      <form onSubmit={this.handleSubmit} className="session-form-box">
        <div>Sign up for free.</div>
        {this.renderErrors()}
          <div className="session-form">
            <input type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className = "session-form-input"
              placeholder="First Name"
              />
          <br/>
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className = "session-form-input"
              placeholder="Last Name"
              />
          <br/>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className = "session-form-input"
              placeholder="Email"
              />
          <br/>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className = "session-form-input"
              placeholder="Username"
              />
          <br/>
            <input type="password"
               value={this.state.password}
               onChange={this.update('password')}
               className="session-form-input"
               placeholder="Password"
              />
          <br/>
          <input type="submit"
            className="session-create-button"
            value={"Sign up"} />
          <br/>
        </div>
      </form>
    );
  }

  render () {
    return (
        <div className="session-page">
          <header className="login-signout">{this.navLink()}</header>
          <div className="session-form-container">
            {this.props.location.pathname === "/login" ?
              this.loginForm() :
              this.signUpForm()}
          </div>
        </div>
    );
  }
}

export default withRouter (SessionForm);
