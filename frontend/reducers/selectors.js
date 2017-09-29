export const selectTask = ({ tasks }, id) => {
  const task = tasks[id] || {};
  return task;
};

const sortByDate = (a, b) => {
  if ( a.due < b.due) {
    return -1;
  }
  if (a.due > b.due) {
    return 1;
  }
  return 0;
};

export const allTaskAsArray = ({ tasks }) => (
  Object.keys(tasks).map(id => tasks[id]).sort(sortByDate)
);

export const completedTasks = ({ tasks }) => {
  const allTasks = Object.keys(tasks).map(id => tasks[id]);
  return allTasks.filter(task => task.completed).sort(sortByDate);
};

export const incompleteTasks = ({ tasks }) => {
  const allTasks =  Object.keys(tasks).map(id => tasks[id]);
  return allTasks.filter(task => !task.completed).sort(sortByDate);
};



export const listAsArray = ({ lists }) => (
  Object.keys(lists).map(id=> lists[id])
);
