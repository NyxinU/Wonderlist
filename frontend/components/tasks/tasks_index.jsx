import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TaskIndexItem from './task_index_item';

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
        {tasks.map(task => <TaskIndexItem key={task.id} task={task} />)}
      </ul>
    );
  }
}

export default TasksIndex;
