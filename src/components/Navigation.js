import React from 'react';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FaMicrophone />
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog />
          </Link>
        </li>
        <li>
          <Link to="/">
            &#10092;
          </Link>
        </li>
        <li>
          <Link to="/">
            &#10093;
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
