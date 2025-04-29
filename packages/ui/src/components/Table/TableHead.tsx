import { CSSProperties } from 'react';

import * as s from './TableHead.css';

export interface TableHeadProps extends React.ComponentProps<'th'> {
  width?: CSSProperties['width'];
  textAlign?: CSSProperties['textAlign'];
}

export const TableHead = ({ width, textAlign, style, ...props }: TableHeadProps) => {
  return <th style={{ ...style, width, textAlign }} className={s.tableHead} {...props} />;
};
