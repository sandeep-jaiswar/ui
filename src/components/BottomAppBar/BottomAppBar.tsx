import React, { type FC } from 'react';
import styles from './bottomAppBar.module.scss';
import { type BottomAppBarProps } from './BottomAppBar.types';

const BottomAppBar: FC<BottomAppBarProps> = ({ children, customClass }) => {
  return (
    <div className={`${styles.wrapper} ${customClass}`} onClick={() => {}}>
      {children}
    </div>
  );
};

export default BottomAppBar;
