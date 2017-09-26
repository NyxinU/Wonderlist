import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TaskForm from './task_form';
import TaskIndexItem from './task_index_item';
import TaskDetailContainer from './task_detail_container';
import ListsIndexContainer from '../lists/lists_index_container';
import TestComponent from './test_component';

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
    const listId = this.props.location.pathname.match(/\d+/)[0];
    console.log(listId);
    return (
      <section className="task-index">
        <header> Welcome User with dropdown to logout and search bar </header>
        <nav>
          <ListsIndexContainer />
        </nav>
          <TaskForm tasks={tasks} createTask={createTask}/>
        <ul>
          {tasks.map(
            task => <TaskIndexItem
            key={task.id}
            task={task}
            listId={listId}
            callBackFromParent={this.getStateFromChild}
            />
          )}
        </ul>
        <Route path='/lists/:listId/:taskId' component={TaskDetailContainer} />
      </section>
    );
  }
}

export default HomepageIndex;
