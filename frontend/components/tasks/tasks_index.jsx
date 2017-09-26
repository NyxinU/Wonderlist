import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TaskForm from './task_form';
import TaskIndexItem from './task_index_item';
import TaskDetailContainer from './task_detail_container';
import ListsIndexContainer from '../lists/lists_index_container';

class HomepageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.getStateFromChild = this.getStateFromChild.bind(this);
  }

  componentDidMount() {
    const tasksPath = /tasks/.exec(this.props.match.path);
    tasksPath ? this.props.requestAllTasks() : this.props.requestAllTasks(this.props.match.params.listId);

  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname)
    {const tasksPath = /tasks/.exec(nextProps.location.pathname);
    tasksPath ? nextProps.requestAllTasks() : nextProps.requestAllTasks(nextProps.match.params.listId);}
  }

  getStateFromChild (dataFromChild) {
    this.props.updateTask(dataFromChild);
  }


  render () {
    const { tasks, createTask } = this.props;
    return (
      <section className="task-index">
        <header> Welcome User with dropdown to logout and search bar </header>
        <nav>
          <Route path='/tasks/' component={ListsIndexContainer} />
          <Route path='/lists/' component={ListsIndexContainer} />
        </nav>
          <TaskForm tasks={tasks} createTask={createTask} />
        <ul>
          {tasks.map(task => <TaskIndexItem key={task.id} task={task} callBackFromParent={this.getStateFromChild} />)}
        </ul>
        <Route path='/tasks/:taskId' component={TaskDetailContainer} />
      </section>
    );
  }
}

export default HomepageIndex;
