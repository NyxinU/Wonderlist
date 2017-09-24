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
  }

  componentWillMount() {
    this.props.requestAllTasks();
  }

  handleNewTask(e) {
    e.preventDefault();
    const state = Object.assign({},this.state);
    this.props.createTask(state);
  }

  updateState(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    const { tasks } = this.props;
    console.log(this.state);
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
          {tasks.map(task => <TaskIndexItem key={task.id} task={task} />)}
        </ul>
        <Route path='/tasks/:taskId' component={TaskDetailContainer} />
      </section>
    );
  }
}

export default TasksIndex;
