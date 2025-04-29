import { forwardRef } from 'react';

import clsx from 'clsx';

import * as s from './Table.css';

export interface TableProps extends React.ComponentProps<'table'> {
  striped?: boolean;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(({ striped, ...props }: TableProps, ref) => {
  return <table ref={ref} className={clsx(s.table, striped && s.striped)} {...props} />;
});
Table.displayName = 'Table';

export { s as tableCss };
