'use client';

import { ReactNode, useContext, useEffect, useLayoutEffect, useRef } from 'react';

import * as s from './AccordionContent.css';
import { AccordionContext } from './AccordionContext';

interface AccordionContentProps {
  children: ReactNode;
}

export const AccordionContent = ({ children }: AccordionContentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const accordionContext = useContext(AccordionContext);

  if (!accordionContext) {
    throw new Error('AccordionContent must be used within an Accordion component.');
  }

  const { isExpanded } = accordionContext;

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (!isExpanded) {
      container.style.height = `${container.scrollHeight}px`;
      container.className = s.container({ expanded: isExpanded });
      //eslint-disable-next-line
      container.offsetTop;
      container.style.height = '0';

      return;
    }

    container.style.height = `${container.scrollHeight}px`;
    container.className = s.container({ expanded: isExpanded });
  }, [isExpanded]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== container || e.propertyName !== 'height' || !isExpanded) {
        return;
      }

      container.style.height = 'auto';
    };

    container.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      container.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [containerRef, isExpanded]);

  return (
    <div ref={containerRef} className={s.container({ expanded: isExpanded })}>
      <div className={s.inner}>{children}</div>
    </div>
  );
};
