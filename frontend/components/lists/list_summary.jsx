import React from 'react';

class ListSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.currentList) {
      return <div />;
    }
    const {completedTaskCount, incompleteTaskCount, currentList} = this.props;
    return (
      <aside className="list-summary">
        <div>List Summary</div>
        <hr/>
        <div>{currentList.title}</div>
        <div>Task: {completedTaskCount} </div>
        <div>Completed: {incompleteTaskCount} </div>
      </aside>
    );
  }
}

export default ListSummary;
