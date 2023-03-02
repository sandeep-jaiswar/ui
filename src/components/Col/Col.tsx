import React, { type FC } from 'react';
import styles from './col.module.scss';
import { type ColProps } from './Col.types';

const Col: FC<ColProps> = ({ children, size, customClass }) => {
  return (
    <div
      className={`${styles.wrapper} ${styles[`col-${size}`]} ${customClass}`}
    >
      {children}
    </div>
  );
};

export default Col;
