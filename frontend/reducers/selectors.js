export const selectTask = ({ tasks }, id) => {
  const task = tasks[id] || {};
  return task;
};

export const asArray = ({ tasks }) => (
  Object.keys(tasks).map(id => tasks[id])
);

export const listAsArray = ({ lists }) => (
  Object.keys(lists).map(id=> lists[id])
);
