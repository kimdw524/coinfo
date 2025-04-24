import { forwardRef } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';

import * as s from './Card.css';

type CardVariants = NonNullable<RecipeVariants<typeof s.card>>;

export interface CardProps extends CardVariants, Omit<React.HTMLAttributes<HTMLDivElement>, keyof CardVariants> {
  width?: string;
  height?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ width, height, color = 'card', ...props }, ref) => {
  return <div ref={ref} className={s.card({ color })} style={{ width, height }} {...props} />;
});
Card.displayName = 'Card';

export { s as cardCss };
