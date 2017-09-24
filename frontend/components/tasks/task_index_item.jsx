import React from 'react';
import { Link } from 'react-router-dom';


const TaskIndexItem = ({ task }) => {
  const dueDate = new Date(task.due);
  var weekday=new Array(7);
  weekday[0]="Mon";
  weekday[1]="Tues";
  weekday[2]="Wed";
  weekday[3]="Thur";
  weekday[4]="Fri";
  weekday[5]="Sat";
  weekday[6]="Sunday";
  let dayOfWeek = weekday[dueDate.getDay()];

  return (
    <li>
      <input type="checkbox"/>
      <Link to={`/tasks/${task.id}`}>
        <span>{task.title}</span>
          &nbsp;
          <span>{dayOfWeek}</span>
          &nbsp;
          <span>{task.due}</span>
      </Link>
    </li>
  );
};

export default TaskIndexItem;
