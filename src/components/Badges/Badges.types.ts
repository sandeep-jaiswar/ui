import { ReactNode, type MouseEventHandler } from 'react';
export interface BadgesProps {
  type?: 'primary' | 'secondary' | 'error';
  text?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
    customClass?: string;
    children: ReactNode
}
