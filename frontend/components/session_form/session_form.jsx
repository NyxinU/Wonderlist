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

  render () {
    return (
      <div className="login-form-container">
        {this.navLink()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.formType === "login" ?
            "Been here before? Welcome Back!" :
            "Sign up for Free"}
          {this.renderErrors()}
          <div className="login-form">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className = "login-input"
                placeholder="Username"
                />
            <br/>
              <input type="password"
                 value={this.state.password}
                 onChange={this.update('password')}
                 className="login-input"
                 placeholder="Password"
                />
            <br/>
            <input type="submit"
              className="session-create-button"
              value={this.props.formType === "login" ? "Log in" : "Sign up"} />
            <br/>
            <button onClick={this.demoLogin}>
              Demo Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter (SessionForm);
