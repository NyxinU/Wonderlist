import React from 'react';
import { Link } from 'react-router-dom';

const ListIndexItem = ({ list }) => {

  return (
    <Link to={`/lists/${list.id}`}>
    <li>
      {list.title}
    </li>
    </Link>
  );
};

export default ListIndexItem;
