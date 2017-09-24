import React from 'react';
import { Link } from 'react-router-dom';


const TaskIndexItem = ({ task }) => {
  var weekday=new Array(7);
  weekday[0]="Mon";
  weekday[1]="Tues";
  weekday[2]="Wed";
  weekday[3]="Thur";
  weekday[4]="Fri";
  weekday[5]="Sat";
  weekday[6]="Sunday";

  const dueDate = new Date(task.due);
  const day = weekday[dueDate.getUTCDay()];
  const month = dueDate.getUTCMonth();
  const date = dueDate.getUTCDate();
  const year = dueDate.getUTCFullYear();
  const fulldate = `${day} ${month}/${date}/${year}`;

  return (
    <li>
      <input type="checkbox"/>
      <Link to={`/tasks/${task.id}`}>
        <span>{task.title}</span>
          &nbsp;
          <span>{task.due ? fulldate : ""}</span>
      </Link>
    </li>
  );
};

export default TaskIndexItem;
