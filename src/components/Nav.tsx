import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>首页</NavLink></li>
        <li><NavLink to="/articles" className={({ isActive }) => isActive ? styles.active : undefined}>文章</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>关于我</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;