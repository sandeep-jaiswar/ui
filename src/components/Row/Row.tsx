import React, { type FC } from 'react';
import styles from './row.module.scss';
import { type RowProps } from './Row.types';

const Row: FC<RowProps> = ({ children, size, customClass }) => {
  return (
    <div
      className={`${styles.wrapper} ${styles[`col-${size}`]} ${customClass}`}
    >
      {children}
    </div>
  );
};

export default Row;
