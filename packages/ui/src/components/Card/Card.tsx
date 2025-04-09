import { RecipeVariants } from '@vanilla-extract/recipes';

import * as s from './Card.css';

type CardVariants = NonNullable<RecipeVariants<typeof s.card>>;

export interface CardProps extends CardVariants, Omit<React.HTMLAttributes<HTMLDivElement>, keyof CardVariants> {
  width?: string;
  height?: string;
}

export const Card = ({ width, height, color = 'card', ...props }: CardProps) => {
  return <div className={s.card({ color })} style={{ width, height }} {...props} />;
};

export { s as cardCss };
