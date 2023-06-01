import React from 'react';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from '../CSS/Navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.ul_cont}>
      <li>
        <Link to="/" className={styles.link}>
          <span>
            <IoIosArrowBack className={styles.icon} />
          </span>
        </Link>
      </li>

      <div className={styles.set_wrapper}>
        <li>
          <Link to="/">
            <span className={styles.icon}>
              <FaMicrophone />
            </span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <span className={styles.icon}>
              <FaCog />
            </span>
          </Link>
        </li>
      </div>
    </ul>
  </nav>
);

export default Navigation;
