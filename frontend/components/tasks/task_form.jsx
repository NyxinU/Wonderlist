import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        title: ''
      };
      this.handleNewTask = this.handleNewTask.bind(this);
    }

      handleNewTask(e) {
        e.preventDefault();
        const state = Object.assign({},this.state);
        this.props.createTask(this.state);
        this.setState({
          title: ''
        });
      }

      updateState(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }
  render () {
    return (
    <form onSubmit={this.handleNewTask}>
      <div>
        <input
          type="text"
          className="add-task-input"
          value={this.state.title}
          onChange={this.updateState("title")}
          placeholder={"Add a task..."}
          />
      </div>
      <noscript>
      <input
        type="submit"
        value={"Add Task"}
        />
      </noscript>
    </form>
  );
  }
}

export default TaskForm;
