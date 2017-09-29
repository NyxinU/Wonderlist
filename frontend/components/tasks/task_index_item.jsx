import React from 'react';
import { Link, Redirect, NavLink } from 'react-router-dom';


const TaskIndexItem = ({ task, callBackFromParent, listId }) => {
  var weekday=new Array(7);
  weekday[0]="Sun";
  weekday[1]="Mon";
  weekday[2]="Tues";
  weekday[3]="Wed";
  weekday[4]="Thu";
  weekday[5]="Fri";
  weekday[6]="Sat";


  const dueDate = new Date(task.due);
  const day = weekday[dueDate.getUTCDay()];
  const month = dueDate.getUTCMonth() + 1;
  const date = dueDate.getUTCDate();
  const year = dueDate.getUTCFullYear();
  const fulldate = `${day} ${month}/${date}/${year}`;

  const giveStateToParent = () => {
    const newState = Object.assign({}, task);
    newState.completed = !newState.completed;
    callBackFromParent(newState);
  };

  return (
    <li>
      {task.completed ? <input
        type="checkbox"
        onChange={giveStateToParent}
        checked/> :
        <input
        type="checkbox"
        onChange={giveStateToParent} /> }
      <NavLink to={`/lists/${task.list_id}/tasks/${task.id}`}
      className="task-index-link">
        <span>{task.title}</span>
        <span className="task-due-date">{task.due ? "Due:" + " " + fulldate : ""}</span>
    </NavLink>
  </li>
  );
};

export default TaskIndexItem;
