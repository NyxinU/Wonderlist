import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        title: '',
        user_id: this.props.currentUser.id
      };
      this.handleNewList = this.handleNewList.bind(this);
  }

  handleNewList(e) {
    e.preventDefault();
    const state = Object.assign({},this.state);
    this.props.createList(state);
    this.setState({
      title: ''
    });
  }

  updateState(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    return (
      <form
        onSubmit={this.handleNewList}>
        <div>
        <input
          type="text"
          className="add-list-input"
          value={this.state.title}
          onChange={this.updateState("title")}
          placeholder={"Add a new list"}
          maxLength="40"
          />
        </div>
          <noscript>
          <input
            type="submit"
            value={"Add List"}
            />
          </noscript>
      </form>
    );
  }
}

export default ListForm;
