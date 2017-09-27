import { connect } from 'react-redux';

import ListsIndex from './lists_index';
import { requestAllLists, updateList, createList, deleteList } from '../../actions/list_actions';
import { listAsArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  lists: listAsArray(state.entities),
  currentUser:  state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  requestAllLists: () => dispatch(requestAllLists()),
  updateList: list => dispatch(updateList(list)),
  createList: list => dispatch(createList(list)),
  deleteList: id => dispatch(deleteList(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsIndex);
