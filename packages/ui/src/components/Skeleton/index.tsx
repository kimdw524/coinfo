import { forwardRef } from 'react';

import * as s from './Skeleton.css';

export interface SkeletonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  width?: string;
  height?: string;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({ width, height, ...props }, ref) => {
  return <div ref={ref} className={s.skeleton} {...props} style={{ ...props.style, width, height }} />;
});
Skeleton.displayName = 'Skeleton';
