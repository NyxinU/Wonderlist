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
    // console.log(this.props);
    const { lists, deleteList, updateList, history } = this.props;
    return (
      <div>
        <ListForm
          currentUser={this.props.currentUser}
          createList={this.props.createList}
          history={history}
          />
        <Link className="all-task-link" to='/lists'>All Tasks</Link>
      <ul>
        {lists.map(list => <ListIndexItem
          key={list.id}
          list={list}
          deleteList={deleteList}
          updateList={updateList}
          currentUser={this.props.currentUser}
          params={this.props.match.params.listId}
          history={history}
          />)}
      </ul>
      </div>
    );
  }
}

export default ListsIndex;
