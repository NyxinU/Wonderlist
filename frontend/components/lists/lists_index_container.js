import { connect } from 'react-redux';

import ListsIndex from './lists_index';
import { requestAllLists, updateList, createList } from '../../actions/list_actions';
import { listAsArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  lists: listAsArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  requestAllLists: () => dispatch(requestAllLists()),
  updateList: list => dispatch(updateList(list)),
  createList: list => dispatch(createList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsIndex);
