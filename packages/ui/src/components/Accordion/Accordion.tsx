'use client';

import { ReactNode, useReducer } from 'react';

import * as s from './Accordion.css';
import { AccordionContext, accordionReducer } from './AccordionContext';

interface AccordionProps {
  children: ReactNode;
  padding?: boolean;
  expanded?: boolean;
}

export const Accordion = ({ children, padding = true, expanded = false }: AccordionProps) => {
  const [isExpanded, dispatch] = useReducer(accordionReducer, expanded);

  return (
    <div className={s.accordion({ padding })}>
      <AccordionContext.Provider value={{ isExpanded, dispatch }}>{children}</AccordionContext.Provider>
    </div>
  );
};
