import React, { FC } from 'react';
import styles from './badges.module.scss';
import { BadgesProps } from './Badges.types';

const Badges: FC<BadgesProps> = ({
  type,
  text,
  onClick,
  customClass,
  children,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${styles[`badges-${type}`]} ${customClass}`}
      onClick={() => {}}
    >
      <p>{children}</p>
    </div>
  );
};

export default Badges;
