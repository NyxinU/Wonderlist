import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class TasksIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllTasks();
  }

  render () {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map(task => <li>{task.title}</li>)}
      </ul>
    );
  }
}

export default TasksIndex;
