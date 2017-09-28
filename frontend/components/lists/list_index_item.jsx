import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ListForm from './list_form';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.list.title,
      id: this.props.list.id,
      user_id: this.props.currentUser.id,
      toggleEditForm: false,
      dropdownOpen: false
    };
    this.toggle =  this.toggle.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleEditToggle = this.handleEditToggle.bind(this);
    this.handleUpdateList = this.handleUpdateList.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
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
          <li className={this.giveSelectedClass()}>
            <Link className={this.giveSelectedClass()} to={`/lists/${list.id}`}>
              {list.title}
            </Link>
            <Dropdown className="edit-list-dropdown" group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
              <DropdownToggle caret></DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={this.handleEditToggle} >Rename</DropdownItem>
                <DropdownItem onClick={this.handleDeleteList}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
          {this.editForm()}
        </div>
      );
    }
  }


export default ListIndexItem;
