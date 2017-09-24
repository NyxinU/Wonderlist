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

  render () {
    if (!this.props.task) {
      return <div />;
    }
    const { id, title, due, reward, completed } = this.state;
    var weekday=new Array(7);
    weekday[0]="Mon";
    weekday[1]="Tues";
    weekday[2]="Wed";
    weekday[3]="Thur";
    weekday[4]="Fri";
    weekday[5]="Sat";
    weekday[6]="Sunday";
    const dueDate = new Date(due);
    const day = weekday[dueDate.getUTCDay()];

    return (
        <form onSubmit={this.updateDb}>
          <Link to="/tasks">close x</Link>
          <input type="text"
            value={title}
            onChange={this.updateState("title")}
            />
          <label>Due: {day}
          <input type="date"
            value={due ? due : ""}
            onChange={this.updateState("due")}
            />
          </label>
          <label>Reward:
          <input type="text"
            value={reward ? reward : ""}
            onChange={this.updateState("reward")}
            />
          </label>
          <input type="submit"
            value={"updateTask"} />
        </form>
    );
  }

}

export default withRouter (TaskDetail);
