import { forwardRef } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';
import { clsx } from 'clsx';

import { sprinkles, SprinklesProps } from '#styles';

import * as s from './Box.css';

interface BoxProps
  extends Partial<SprinklesProps>,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof SprinklesProps>,
    NonNullable<RecipeVariants<typeof s.box>> {}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      flex = false,
      rounded = false,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      gap,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      padding,
      paddingX,
      paddingY,
      margin,
      marginX,
      marginY,
      backgroundColor,
      color,
      lineHeight,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          className,
          s.box({ flex, rounded }),
          sprinkles({
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            gap,
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
            padding,
            paddingX,
            paddingY,
            margin,
            marginX,
            marginY,
            backgroundColor,
            color,
            lineHeight,
          }),
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Box.displayName = 'Box';
