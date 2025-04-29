import { forwardRef } from 'react';

import clsx from 'clsx';

import * as s from './TableRow.css';

export interface TableRowProps extends React.ComponentProps<'tr'> {
  interactive?: boolean;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ interactive = false, className, ...props }: TableRowProps, ref) => {
    return <tr ref={ref} className={clsx(interactive && s.interactive, className)} {...props} />;
  },
);
TableRow.displayName = 'TableRow';
