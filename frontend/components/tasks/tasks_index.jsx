import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TaskIndexItem from './task_index_item';
import TaskDetailContainer from './task_detail_container';

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
      <section>
        <ul>
          {tasks.map(task => <TaskIndexItem key={task.id} task={task} />)}
        </ul>
        <Route path='/tasks/:taskId' component={TaskDetailContainer} />
      </section>
    );
  }
}

export default TasksIndex;
