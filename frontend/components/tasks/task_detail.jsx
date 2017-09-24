import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      due: '',
      reward: '',
      completed: false
    };

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
        <section>
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            />
          <div>{dayOfWeek + " " + due}</div>
          <div>{reward}</div>
        </section>
      </div>
    );
  }

}

export default TaskDetail;
