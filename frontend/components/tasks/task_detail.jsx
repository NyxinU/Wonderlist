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
    weekday[4]="Thu";
    weekday[5]="Fri";
    weekday[6]="Sat";
    const dueDate = new Date(due);
    const day = weekday[dueDate.getUTCDay()];
    const listId = this.props.match.params.listId
    return (
      <aside className="task-detail">
        <form onSubmit={this.updateDb}>
          <input
            className={"task-detail-title"}
            type="text"
            value={title}
            onChange={this.updateState("title")}
            />
          <hr/>
          <div className="aside-details">
            <div>
            <label>{due ? `Due: ${day}` : `Due: `}</label>
            <input
              type="date"
              value={due ? due : ""}
              onChange={this.updateState("due")}
              />
          </div>
          <hr/>
          </div>
            <input
              className="update-task"
              type="submit"
              value={"Update Task"} />
            <hr />
            <footer className="task-detail-footer">
              <div>
                <Link to={`/lists/${listId}`}>close x</Link>
                <i className="fa fa-trash-o" onClick={this.handleDeleteTask} aria-hidden="true"></i>
              </div>
            </footer>
        </form>
      </aside>
    );
  }
}

export default withRouter (TaskDetail);
