import { CSSProperties } from 'react';

import clsx from 'clsx';

import * as s from './TableCell.css';

export interface TableCellProps extends React.ComponentProps<'td'> {
  width?: CSSProperties['width'];
  textAlign?: CSSProperties['textAlign'];
}

export const TableCell = ({ width, textAlign, style, className, ...props }: TableCellProps) => {
  return <td style={{ ...style, width, textAlign }} className={clsx(s.tableCell, className)} {...props} />;
};
