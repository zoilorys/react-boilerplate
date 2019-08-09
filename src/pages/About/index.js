import React from 'react';
import Fade from 'react-reveal/Fade';
import cn from 'classnames';

import styles from './About.module.css';

export default () => (
  <Fade>
    <span className={cn(styles.container)}>About</span>
  </Fade>
);
