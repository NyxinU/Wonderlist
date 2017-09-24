import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';


class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.task) {
      this.state = this.props.task;
    }else {
      this.state = { x: "hello"};
    }
    this.update = this.update.bind(this);
    }
  componentWillMount() {
    this.props.requestTask(this.props.match.params.taskId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.taskId !== newProps.match.params.taskId) {
      this.props.requestTask(newProps.match.params.taskId);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    if (!this.props.task) {
      return <div />;
    }
    const { id, title, due, reward, completed } = this.props.task;
    console.log(this.props);
    console.log(this.state);
    const dueDate = new Date(due);
    var weekday=new Array(7);
    weekday[0]="Mon";
    weekday[1]="Tues";
    weekday[2]="Wed";
    weekday[3]="Thur";
    weekday[4]="Fri";
    weekday[5]="Sat";
    weekday[6]="Sunday";
    let dayOfWeek = weekday[dueDate.getDay()];

    return (
      <div>
        <form>
          <input type="text"
            value={title}
            onChange={this}
            />
          <div>{dayOfWeek + " " + due}</div>
          <div>{reward}</div>
        </form>
      </div>
    );
  }

}

export default withRouter (TaskDetail);
