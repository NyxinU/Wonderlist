import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ListIndexItem from './list_index_item';
import ListForm from './list_form';

class ListsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  componentWillMount() {
    this.props.requestAllLists();
  }

  render () {
    console.log(this.props);
    const { lists, deleteList, updateList } = this.props;
    return (
      <div>
        <ListForm
          currentUser={this.props.currentUser}
          createList={this.props.createList}
          />
        <Link to='/lists'>All Tasks</Link>
      <ul>
        {lists.map(list => <ListIndexItem
          key={list.id}
          list={list}
          deleteList={deleteList}
          updateList={updateList}
          currentUser={this.props.currentUser}
          />)}
      </ul>
      </div>
    );
  }
}

export default ListsIndex;
