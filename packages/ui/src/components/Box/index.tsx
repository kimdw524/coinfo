import { forwardRef } from 'react';

import { clsx } from 'clsx';

import { sprinkles, SprinklesProps } from '#styles';

import * as s from './Box.css';

interface BoxProps extends Partial<SprinklesProps>, Omit<React.HTMLAttributes<HTMLDivElement>, keyof SprinklesProps> {
  flex?: boolean;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      flex = false,
      flexDirection,
      justifyContent,
      alignItems,
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
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          flex && s.flex,
          sprinkles({
            flexDirection,
            justifyContent,
            alignItems,
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
