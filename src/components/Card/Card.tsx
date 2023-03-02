import React, { type FC } from 'react';
import styles from './card.module.scss';
import { type CardProps } from './Card.types';

const Card: FC<CardProps> = ({ children }) => {
  return <div className={`${styles.wrapper}`}>{children}</div>;
};

export default Card;
