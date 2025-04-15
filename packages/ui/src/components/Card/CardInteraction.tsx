'use client';

import { useRipple } from '#hooks';

import * as s from './CardInteraction.css';

export const CardInteraction = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { ref, ripple } = useRipple<HTMLDivElement>();

  return (
    <div className={s.cardInteraction} {...props} ref={ref}>
      {children}
      {ripple}
    </div>
  );
};
