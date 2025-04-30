'use client';

import { ButtonHTMLAttributes } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { useRipple } from '#hooks';

import * as s from './Button.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & RecipeVariants<typeof s.button>;

export const Button = ({
  children,
  color = 'primary',
  size = 'md',
  variant = 'contained',
  pulse = false,
  ...props
}: ButtonProps) => {
  const { ref, ripple } = useRipple<HTMLButtonElement>();

  return (
    <button className={s.button({ color, size, variant, pulse })} {...props} ref={ref}>
      <span className={s.span({ size })}>{children}</span>
      {ripple}
    </button>
  );
};

export { s as buttonCss };
