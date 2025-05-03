import { ReactNode } from 'react';

import * as s from './Accordion.css';

interface AccordionProps {
  children: ReactNode;
  padding?: boolean;
}

export const Accordion = ({ children, padding = true }: AccordionProps) => {
  return <div className={s.accordion({ padding })}>{children}</div>;
};
