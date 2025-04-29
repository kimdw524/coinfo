import { CSSProperties } from 'react';

import clsx from 'clsx';

import * as s from './TableHead.css';

export interface TableHeadProps extends React.ComponentProps<'th'> {
  width?: CSSProperties['width'];
  textAlign?: CSSProperties['textAlign'];
}

export const TableHead = ({ width, textAlign, style, className, ...props }: TableHeadProps) => {
  return <th style={{ ...style, width, textAlign }} className={clsx(s.tableHead, className)} {...props} />;
};
