import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListIndexItem from './list_index_item';

class ListsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  componentWillMount() {
    this.props.requestAllLists();
  }

  render () {
    const { lists } = this.props;
    return (
      <ul>
        {lists.map(list => <ListIndexItem key={list.id} list={list} />)}
      </ul>
    );
  }
}

export default ListsIndex;
