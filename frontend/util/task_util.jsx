export const fetchTasks = (listId) => (
  $.ajax({
    method: 'GET',
    url: '/api/tasks/',
    data: {listId: listId}
  })
);

export const fetchTask = id => (
  $.ajax({
    method: 'GET',
    url: `/api/tasks/${id}`,
  })
);

export const createTask = task => (
  $.ajax({
    method: 'POST',
    url: `/api/tasks/`,
    data: { task }
  })
);

export const updateTask = task => (
  $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    data: { task }
  })
);

export const destroyTask = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tasks/${id}`
  })
);
