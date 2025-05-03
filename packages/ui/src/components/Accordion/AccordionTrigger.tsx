'use client';

import { ReactNode, useState } from 'react';

import { ChevronDownIcon } from 'lucide-react';

import * as s from './AccordionTrigger.css';

interface AccordionTriggerProps {
  children: ReactNode;
  iconPosition?: 'text' | 'right';
}

export const AccordionTrigger = ({ children, iconPosition = 'right' }: AccordionTriggerProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div
      className={s.triggerContainer({ iconPosition })}
      aria-expanded={isExpanded}
      onClick={() => setIsExpanded((prev) => !prev)}
    >
      <span>{children}</span>
      <span className={s.arrow({ expand: isExpanded })}>
        <ChevronDownIcon size="1em" />
      </span>
    </div>
  );
};
