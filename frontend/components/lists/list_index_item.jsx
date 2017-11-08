import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ListForm from './list_form';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.list.title,
      id: this.props.list.id,
      user_id: this.props.currentUser.id,
      modal: false
    };
    this.toggle =  this.toggle.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleEditToggle = this.handleEditToggle.bind(this);
    this.handleUpdateList = this.handleUpdateList.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleEditToggle() {
    this.setState({
      toggleEditForm: !this.state.toggleEditForm
    });
  }

  handleDeleteList(e) {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete ${this.props.list.title}?`)) {
      this.props.deleteList(this.props.list.id);
      this.props.history.push(`/lists/`);
    }
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
          maxLength="30"
          />
          <noscript>
          <input
            type="submit"
            value={"Add List"}
            />
          </noscript>
          <button onClick={this.handleEditToggle}>Cancel</button>
      </form>
      :
      <div></div>
    );
  }

  giveSelectedClass(){
    if (this.props.params === this.props.list.id) {
      return "active-button";
    }else {
      return "inactive-button";
    }
  }


    render () {
      const { list } = this.props;
      return (
        <div>
          <li className="list-index-item">
            <NavLink to={`/lists/${list.id}`}>
              {list.title}
            </NavLink>
            <i className="fa fa-pencil-square-o" onClick={this.toggle} aria-hidden="true"></i>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </li>
          {this.editForm()}
        </div>
      );
    }
  }


export default ListIndexItem;
