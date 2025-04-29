import { CSSProperties } from 'react';

import * as s from './TableCell.css';

export interface TableCellProps extends React.ComponentProps<'td'> {
  width?: CSSProperties['width'];
  textAlign?: CSSProperties['textAlign'];
}

export const TableCell = ({ width, textAlign, style, ...props }: TableCellProps) => {
  return <td style={{ ...style, width, textAlign }} className={s.tableCell} {...props} />;
};
