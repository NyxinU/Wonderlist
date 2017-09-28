import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import TaskForm from './task_form';
import TaskIndexItem from './task_index_item';
import TaskDetailContainer from './task_detail_container';
import ListsIndexContainer from '../lists/lists_index_container';
import ListSummary from '../lists/list_summary';
import GreetingContainer from '../greeting/greeting_container';
import TestComponent from './test_component';

class HomepageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showincompleteTask: true,
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.getStateFromChild = this.getStateFromChild.bind(this);
    this.handleShowCompletedTask = this.handleShowCompletedTask.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
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

  handleShowCompletedTask() {
    this.setState({
      showincompleteTask: !this.state.showincompleteTask
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
      <ul className="completed-tasks">
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

  giveIncompleteClass() {
    if (this.state.showincompleteTask) {
      return "active-button";
    }else {
      return "inactive-button";
    }
  }

  giveCompleteClass() {
    if (this.state.showincompleteTask) {
      return  "inactive-button";
    }else {
      return  "active-button";
    }
  }

  render () {
    const { tasks, createTask, currentUser, incompleteTasks, completedTasks, lists} = this.props;
    const listId = this.props.match.params.listId;
    const incompleteTaskCount = incompleteTasks.length;
    const completedTaskCount = completedTasks.length;
    const currentList = lists[this.props.match.params.listId]
    return (
      <section className="task-index">
        <header><GreetingContainer /></header>
        <nav>
          <ListsIndexContainer />
        </nav>
          <TaskForm
            tasks={tasks}
            createTask={createTask}
            currentUser={currentUser}
            listId={listId}
            />
          <div className="complete-incomplete-tab">
          <button className={this.giveCompleteClass()} onClick={this.handleShowCompletedTask}>Completed Tasks</button>
          </div>
        {this.state.showincompleteTask ? this.showIncompleteTask() : this.showCompletedTask()}
        <ListSummary incompleteTaskCount={incompleteTaskCount} completedTaskCount={completedTaskCount} currentList={currentList} />
        <Route path='/lists/:listId/tasks/:taskId' component={TaskDetailContainer} />
      </section>
    );
  }
}

export default HomepageIndex;

// handleShowIncompleteTask() {
//   this.setState({
//     showincompleteTask: true
//   });
// }


// <button className={this.giveIncompleteClass()} onClick={this.handleShowIncompleteTask}>Incomplete</button>
