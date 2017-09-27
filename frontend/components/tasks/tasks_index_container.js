import { connect } from 'react-redux';

import HomepageIndex from './tasks_index';
import { requestAllTasks, updateTask, createTask } from '../../actions/task_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  tasks: asArray(state.entities),
  currentUser:  state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllTasks: (id) => dispatch(requestAllTasks(id)),
  updateTask: task => dispatch(updateTask(task)),
  createTask: task => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageIndex);
