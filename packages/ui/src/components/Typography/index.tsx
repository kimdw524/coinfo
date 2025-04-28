import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { sprinkles, SprinklesProps } from '#styles';

import * as s from './Typography.css';

type TypographyElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TypographyProps<T extends TypographyElement = TypographyElement> = ComponentPropsWithoutRef<T> &
  RecipeVariants<typeof s.typography> & {
    children: ReactNode;
    as?: T;
    color?: SprinklesProps['color'];
    style?: CSSProperties;
  };

export const Typography = ({
  children,
  as: Component = 'p',
  color = 'foreground',
  size = 'md',
  weight = 'normal',
  ellipsis = false,
  style,
  ...props
}: TypographyProps) => {
  return (
    <Component
      className={clsx(s.typography({ size, weight, ellipsis }), sprinkles({ color }))}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

export { s as typographyCss };
