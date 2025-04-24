import { RecipeVariants } from '@vanilla-extract/recipes';

import * as s from './CardContent.css';
import { forwardRef } from 'react';

export const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & RecipeVariants<typeof s.cardContent>
>(({ padding = 'md', ...props }, ref) => {
  return <div ref={ref} className={s.cardContent({ padding })} {...props} />;
});
CardContent.displayName = 'CardContent';
