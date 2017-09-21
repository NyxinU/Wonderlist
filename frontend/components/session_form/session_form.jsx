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
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.processForm(user);
}

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup" className="btn btn-info">Sign up</Link>;
    } else {
      return <Link to="/login" className="btn btn-info">Log in</Link>;
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
          {this.props.formType === "login" ? "Welcome Back!" : "Sign up for Free"}
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
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter (SessionForm);
