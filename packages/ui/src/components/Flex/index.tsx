import { forwardRef } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';

import * as s from './Flex.css';

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & RecipeVariants<typeof s.flex>;

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, direction, gap, alignItems, justifyContent, ...props }, ref) => {
    return (
      <div ref={ref} className={s.flex({ direction, gap, alignItems, justifyContent })} {...props}>
        {children}
      </div>
    );
  },
);
Flex.displayName = 'Flex';

export { s as flexCss };
