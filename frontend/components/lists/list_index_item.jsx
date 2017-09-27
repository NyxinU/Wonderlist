import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListForm from './list_form';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.list.title,
      id: this.props.list.id,
      user_id: this.props.currentUser.id,
      toggleEditForm: false
    };
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleEditToggle = this.handleEditToggle.bind(this);
    this.handleUpdateList = this.handleUpdateList.bind(this);
  }

  handleEditToggle() {
    this.setState({
      toggleEditForm: !this.state.toggleEditForm
    });
  }

  handleDeleteList(e) {
    e.preventDefault();
    this.props.deleteList(this.props.list.id);
  }

  handleUpdateList(e) {
    e.preventDefault();
    const state = Object.assign({}, this.state);
    this.props.updateList(state);
    this.handleEditToggle();
  }

  updateState(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  editForm() {
    return (
      this.state.toggleEditForm ?
      <form onSubmit={this.handleUpdateList}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.updateState("title")}
          placeholder={"List Name"}
          />
          <noscript>
          <input
            type="submit"
            value={"Add List"}
            />
          </noscript>
      </form> :
      <div></div>
    );
  }


    render () {

      const { list } = this.props;
      return (
        <div>
          <Link to={`/lists/${list.id}`}>
            <li>
              {list.title}
            </li>
          </Link>
          <button onClick={this.handleEditToggle}>edit</button>
          {this.editForm()}
          <button onClick={this.handleDeleteList}> Delete </button>
        </div>
      );
    }
  }


export default ListIndexItem;
