import { forwardRef } from 'react';

import clsx from 'clsx';

import * as s from './CardThumbnail.css';

export const CardThumbnail = forwardRef<HTMLImageElement, React.ComponentProps<'img'>>(
  ({ className, ...props }, ref) => {
    return <img ref={ref} className={clsx(s.thumbnail, className)} {...props} />;
  },
);
CardThumbnail.displayName = 'CardThumbnail';
