import { ButtonHTMLAttributes } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';

import * as s from './Button.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & RecipeVariants<typeof s.button>;

export const Button = ({ children, color = 'primary', size = 'md', pulse = false, ...props }: ButtonProps) => {
  return (
    <button className={s.button({ color, size, pulse })} {...props}>
      {children}
    </button>
  );
};

export { s as buttonCss };
