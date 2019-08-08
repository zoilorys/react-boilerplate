import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Header.module.css';

export default () => (
  <header className={cn(styles.container)}>
    <div className={cn(styles.section, styles.left)}>
      <Link className={cn(styles.link)} to="/">
        Home
      </Link>
      <Link className={cn(styles.link)} to="/about">
        About
      </Link>
    </div>
    <div className={cn(styles.section, styles.right)}>Right</div>
  </header>
);
