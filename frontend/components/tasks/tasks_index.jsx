import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TaskIndexItem from './task_index_item';
import TaskDetailContainer from './task_detail_container';

class TasksIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleNewTask = this.handleNewTask.bind(this);
    this.getStateFromChild = this.getStateFromChild.bind(this);
  }

  componentWillMount() {
    this.props.requestAllTasks();
  }

  handleNewTask(e) {
    e.preventDefault();
    const state = Object.assign({},this.state);
    this.props.createTask(this.state);
    this.setState({
      title: ''
    });
  }

  getStateFromChild (dataFromChild) {
    this.props.updateTask(dataFromChild);
  }

  updateState(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    const { tasks } = this.props;
    return (
      <section className="task-index">
        <header> Welcome User with dropdown to logout and search bar </header>
        <nav>List Index will go here</nav>
        <form onSubmit={this.handleNewTask}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.updateState("title")}
            />
          <input
            type="submit"
            value={"createTask"}
            />
        </form>
        <ul>
          {tasks.map(task => <TaskIndexItem key={task.id} task={task} callBackFromParent={this.getStateFromChild} />)}
        </ul>
        <Route path='/tasks/:taskId' component={TaskDetailContainer} />
      </section>
    );
  }
}

export default TasksIndex;
