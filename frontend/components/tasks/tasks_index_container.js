import { connect } from 'react-redux';

import TasksIndex from './tasks_index';
import { requestAllTasks, updateTask, createTask } from '../../actions/task_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  tasks: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  requestAllTasks: () => dispatch(requestAllTasks()),
  updateTask: task => dispatch(updateTask(task)),
  createTask: task => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksIndex);
