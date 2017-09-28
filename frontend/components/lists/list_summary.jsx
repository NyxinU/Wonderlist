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
        <div className="list-summary-label">List Summary</div>
        <hr/>
        <div className="aside-details">
        <div className="list-summary-content">{currentList.title}</div>
        <hr/>
        <div className="list-summary-content">Task: {completedTaskCount} </div>
        <hr/>
        <div className="list-summary-content">Completed: {incompleteTaskCount} </div>
      </div>
      </aside>
    );
  }
}

export default ListSummary;
