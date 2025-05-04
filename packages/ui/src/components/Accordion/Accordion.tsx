'use client';

import { ReactNode, useReducer } from 'react';

import * as s from './Accordion.css';
import { AccordionContext, accordionReducer } from './AccordionContext';

interface AccordionProps {
  children: ReactNode;
  padding?: boolean;
}

export const Accordion = ({ children, padding = true }: AccordionProps) => {
  const [isExpanded, dispatch] = useReducer(accordionReducer, false);

  return (
    <div className={s.accordion({ padding })}>
      <AccordionContext.Provider value={{ isExpanded, dispatch }}>{children}</AccordionContext.Provider>
    </div>
  );
};
