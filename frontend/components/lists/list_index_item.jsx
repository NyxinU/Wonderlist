import React from 'react';
import { Link } from 'react-router-dom';

const ListIndexItem = ({ list }) => {

  return (
    <li>
      <span>{list.title}</span>
    </li>
  );
};

export default ListIndexItem;
