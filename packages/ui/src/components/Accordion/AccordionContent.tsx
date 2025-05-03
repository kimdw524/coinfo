'use client';

import { ReactNode, useEffect, useRef } from 'react';

import * as s from './AccordionContent.css';

interface AccordionContentProps {
  children: ReactNode;
}

export const AccordionContent = ({ children }: AccordionContentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    container.style.setProperty('--height', `${container.scrollHeight}px`);
    container.style.height = '0';
  }, [containerRef]);

  return (
    <div ref={containerRef} className={s.container}>
      <div className={s.inner}>{children}</div>
    </div>
  );
};
