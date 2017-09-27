import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import TaskForm from './task_form';
import TaskIndexItem from './task_index_item';
import TaskDetailContainer from './task_detail_container';
import ListsIndexContainer from '../lists/lists_index_container';
import TestComponent from './test_component';

class HomepageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showincompleteTask: true
    };
    this.getStateFromChild = this.getStateFromChild.bind(this);
    this.handleShowIncompleteTask = this.handleShowIncompleteTask.bind(this);
    this.handleShowCompletedTask = this.handleShowCompletedTask.bind(this);
  }

  componentDidMount() {
    const tasksPath = /tasks/.exec(this.props.match.path);
    tasksPath ? this.props.requestAllTasks() : this.props.requestAllTasks(this.props.match.params.listId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.listId !== nextProps.match.params.listId)
    {nextProps.requestAllTasks(nextProps.match.params.listId);}
  }

  getStateFromChild (dataFromChild) {
    this.props.updateTask(dataFromChild);
  }

  handleShowIncompleteTask() {
    this.setState({
      showincompleteTask: true
    });
  }

  handleShowCompletedTask() {
    this.setState({
      showincompleteTask: false
    });
  }


  showIncompleteTask() {
    return (
      <ul>
        {this.props.incompleteTasks.map(
          task => <TaskIndexItem
          key={task.id}
          task={task}
          listId={this.props.match.params.listId}
          callBackFromParent={this.getStateFromChild}
          />
        )}
      </ul>
    );
  }

  showCompletedTask() {
    return (
      <ul>
        {this.props.completedTasks.map(
          task => <TaskIndexItem
          key={task.id}
          task={task}
          listId={this.props.match.params.listId}
          callBackFromParent={this.getStateFromChild}
          />
        )}
      </ul>
    );
  }


  render () {
    console.log(this.state);
    const { tasks, createTask, currentUser, incompleteTasks } = this.props;
    const listId = this.props.match.params.listId;
    return (
      <section className="task-index">
        <header> Welcome User with dropdown to logout and search bar </header>
        <nav>
          <ListsIndexContainer />
        </nav>
          <TaskForm
            tasks={tasks}
            createTask={createTask}
            currentUser={currentUser}
            listId={listId}
            />
          <button onClick={this.handleShowIncompleteTask}>Incomplete</button>
          <button onClick={this.handleShowCompletedTask}>Completed</button>
        {this.state.showincompleteTask ? this.showIncompleteTask() : this.showCompletedTask()}
        <Route path='/lists/:listId/tasks/:taskId' component={TaskDetailContainer} />
      </section>
    );
  }
}

export default HomepageIndex;

// const tasksPath = /tasks/.exec(nextProps.location.pathname);
// tasksPath ? nextProps.requestAllTasks() :
