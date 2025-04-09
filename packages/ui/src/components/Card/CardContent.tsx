import { RecipeVariants } from '@vanilla-extract/recipes';

import * as s from './CardContent.css';

export const CardContent = ({
  padding = 'md',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & RecipeVariants<typeof s.cardContent>) => {
  return <div className={s.cardContent({ padding })} {...props} />;
};
