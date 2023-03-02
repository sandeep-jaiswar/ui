import React, { Children, type FC } from 'react';
import style from './grid.module.scss';
import { type GridProps } from './Grid.types';

const Grid: FC<GridProps> = ({ children }) => {
  return <div className={`${style.wrapper}`}>{children}</div>;
};

export default Grid;
