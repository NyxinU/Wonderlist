export const selectTask = ({ tasks }, id) => {
  const task = tasks[id] || {};
  return task;
};

export const allTaskAsArray = ({ tasks }) => (
  Object.keys(tasks).map(id => tasks[id])
);

export const completedTasks = ({ tasks }) => {
  const allTasks = Object.keys(tasks).map(id => tasks[id]);
  return allTasks.filter(task => task.completed);
};

export const incompleteTasks = ({ tasks }) => {
  const allTasks =  Object.keys(tasks).map(id => tasks[id]);
  return allTasks.filter(task => !task.completed);
};



export const listAsArray = ({ lists }) => (
  Object.keys(lists).map(id=> lists[id])
);
