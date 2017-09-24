import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';


class TaskDetail extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.task) {
      this.state = this.props.task;
    }else {
      this.state = {};
    }
    this.updateState = this.updateState.bind(this);
    this.updateDb = this.updateDb.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  componentWillMount() {
    this.props.requestTask(this.props.match.params.taskId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.taskId !== newProps.match.params.taskId) {
      this.props.requestTask(newProps.match.params.taskId);
    }
    if (newProps.task) {
      this.setState(newProps.task);
    }
  }

  updateState(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateDb(e) {
    e.preventDefault();
    const state = Object.assign({},this.state);
    this.props.updateTask(state);
  }

  handleDeleteTask(e) {
    e.preventDefault();
    const state = Object.assign({},this.state);
    this.props.deleteTask(state.id);
  }

  render () {
    if (!this.props.task) {
      return <div />;
    }
    const { id, title, due, reward, completed } = this.state;
    var weekday=new Array(7);
    weekday[0]="Sun";
    weekday[1]="Mon";
    weekday[2]="Tues";
    weekday[3]="Wed";
    weekday[4]="Thur";
    weekday[5]="Fri";
    weekday[6]="Sat";
    const dueDate = new Date(due);
    const day = weekday[dueDate.getUTCDay()];

    return (
      <form onSubmit={this.updateDb}>
        <input
          type="text"
          value={title}
          onChange={this.updateState("title")}
          />
        <label>Due: {day}
        <input
          type="date"
          value={due ? due : ""}
          onChange={this.updateState("due")}
          />
        </label>
        <label>Reward:
        <input
          type="text"
          value={reward ? reward : ""}
          onChange={this.updateState("reward")}
          />
        </label>
        <input
          type="submit"
          value={"Update Task"} />
        <Link to="/tasks">close x</Link>
        <button onClick={this.handleDeleteTask} >
          Delete Task
        </button>
      </form>
    );
  }
}

export default withRouter (TaskDetail);
