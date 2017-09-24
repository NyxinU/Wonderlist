import React from 'react';
import { Link } from 'react-router-dom';


const TaskIndexItem = ({ task, callBackFromParent }) => {
  var weekday=new Array(7);
  weekday[0]="Sun";
  weekday[1]="Mon";
  weekday[2]="Tues";
  weekday[3]="Wed";
  weekday[4]="Thur";
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
      <input
        type="checkbox"
        onChange={giveStateToParent} />
      <Link
        to={`/tasks/${task.id}`}>
        <span>{task.title}</span>
        &nbsp;
        <span>{task.due ? fulldate : ""}</span>
      </Link>
      <label>Completed:
      <span>{` ${task.completed}`}</span>
      </label>
    </li>
  );
};

export default TaskIndexItem;
