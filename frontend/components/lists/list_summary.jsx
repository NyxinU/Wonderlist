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
      <div>
      <div>{currentList.title}</div>
      <div> {completedTaskCount} </div>
      <div> {incompleteTaskCount} </div>
      </div>
    );
  }
}

export default ListSummary;
