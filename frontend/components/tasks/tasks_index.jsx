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
    this.myCallBack = this.myCallBack.bind(this);
  }

  componentWillMount() {
    this.props.requestAllTasks();
  }

  handleNewTask(e) {
    e.preventDefault();
    const state = Object.assign({},this.state);
    this.props.createTask(state);
    this.setState({
      title: ''
    });
  }

  myCallBack (dataFromChild) {
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
      <section>
        <form onSubmit={this.handleNewTask}>
          <input type="text"
            value={this.state.title}
            onChange={this.updateState("title")}
            />
          <input type="submit"
            value={"createTask"}
            />
        </form>
        <ul>
          {tasks.map(task => <TaskIndexItem key={task.id} task={task} callBackFromParent={this.myCallBack} />)}
        </ul>
        <Route path='/tasks/:taskId' component={TaskDetailContainer} />
      </section>
    );
  }
}

export default TasksIndex;
